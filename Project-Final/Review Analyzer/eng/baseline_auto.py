import os
import json
from typing import List, Tuple

import pandas as pd
import torch
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
from sklearn.model_selection import train_test_split
from transformers import (
    DistilBertTokenizer,
    DistilBertForSequenceClassification,
    pipeline as hf_pipeline,
)


LABEL_MAP = {0: "Negative", 1: "Neutral", 2: "Positive"}


def _base_dir() -> str:
    return os.path.dirname(os.path.abspath(__file__))


def _ensure_dataset(csv_path: str) -> pd.DataFrame:
    if not os.path.exists(csv_path):
        # Create dataset using data_loader
        from data_loader import load_and_process_data

        df = load_and_process_data()
        if df is None:
            raise RuntimeError("Failed to load dataset via data_loader.")
        df.to_csv(csv_path, index=False)
    return pd.read_csv(csv_path)


def _split(df: pd.DataFrame, seed: int = 42) -> Tuple[pd.DataFrame, pd.DataFrame]:
    train_df, test_df = train_test_split(df, test_size=0.2, random_state=seed, stratify=df["label"])
    return train_df.reset_index(drop=True), test_df.reset_index(drop=True)


def _predict_distilbert_dir(texts: List[str], model_dir: str) -> List[int]:
    # Force local files only to avoid any hub validation issues
    tokenizer = DistilBertTokenizer.from_pretrained(model_dir, local_files_only=True)
    model = DistilBertForSequenceClassification.from_pretrained(model_dir, local_files_only=True)
    model.eval()

    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    model.to(device)

    preds: List[int] = []
    batch_size = 16
    for i in range(0, len(texts), batch_size):
        batch = texts[i : i + batch_size]
        inputs = tokenizer(batch, return_tensors="pt", truncation=True, max_length=128, padding=True)
        inputs = {k: v.to(device) for k, v in inputs.items()}
        with torch.no_grad():
            logits = model(**inputs).logits
        preds.extend(logits.argmax(dim=-1).cpu().numpy().tolist())
    return preds


def _predict_flan_t5(texts: List[str]) -> List[int]:
    clf = hf_pipeline("text2text-generation", model="google/flan-t5-base", device=-1)
    prompts = [
        (
            "Classify the sentiment of the following review into one of: Negative, Neutral, Positive.\n"
            "Answer with a single word (Negative, Neutral, or Positive).\n\nReview: "
            + t
        )
        for t in texts
    ]

    preds: List[int] = []
    batch_size = 8
    for i in range(0, len(prompts), batch_size):
        out = clf(
            prompts[i : i + batch_size],
            max_new_tokens=2,
            do_sample=False,
            num_beams=1,
            clean_up_tokenization_spaces=True,
        )
        for o in out:
            s = (o.get("generated_text", "").strip().lower())
            if "positive" in s or s.startswith("pos"):
                preds.append(2)
            elif "neutral" in s or s.startswith("neu"):
                preds.append(1)
            elif "negative" in s or s.startswith("neg"):
                preds.append(0)
            else:
                preds.append(1)  # fallback neutral
    return preds


def _report(y_true: List[int], y_pred: List[int], title: str) -> dict:
    acc = accuracy_score(y_true, y_pred)
    print(f"\n== {title} ==")
    print(f"Accuracy: {acc:.4f}")
    print(
        classification_report(
            y_true,
            y_pred,
            target_names=[LABEL_MAP[0], LABEL_MAP[1], LABEL_MAP[2]],
        )
    )
    return {
        "title": title,
        "accuracy": acc,
        "report": classification_report(
            y_true,
            y_pred,
            target_names=[LABEL_MAP[0], LABEL_MAP[1], LABEL_MAP[2]],
            output_dict=True,
        ),
        "confusion_matrix": confusion_matrix(y_true, y_pred).tolist(),
    }


def main():
    base = _base_dir()
    csv_path = os.path.join(base, "sentiment_data.csv")
    results_dir = os.path.join(base, "results", "baseline_auto")
    os.makedirs(results_dir, exist_ok=True)

    print("Loading/ensuring dataset...")
    df = _ensure_dataset(csv_path)
    if not {"text", "label"}.issubset(df.columns):
        raise ValueError("Dataset must contain 'text' and 'label' columns.")

    # Use only 40% of the data
    df = df.sample(frac=0.4, random_state=42).reset_index(drop=True)
    print(f"Using 40% of data: {len(df)} samples")

    _, test_df = _split(df, seed=42)
    texts = test_df["text"].astype(str).tolist()
    y_true = test_df["label"].astype(int).tolist()

    # Detect local DistilBERT directory automatically
    candidates = [
        os.path.join(base, "model_output"),
        os.path.join(base, "results", "checkpoint-400"),
    ]
    distil_dir = next((p for p in candidates if os.path.isdir(p)), None)
    if distil_dir is None:
        raise FileNotFoundError(
            "Could not find a local DistilBERT model directory. Expected one of:\n"
            f" - {candidates[0]}\n - {candidates[1]}\n"
            "Make sure training saved to 'model_output' or use the checkpoint folder."
        )

    print(f"Evaluating local DistilBERT at: {distil_dir}")
    preds_local = _predict_distilbert_dir(texts, distil_dir)
    metrics_local = _report(y_true, preds_local, f"Local DistilBERT ({os.path.basename(distil_dir)})")

    print("Evaluating FLAN-T5 Zero-shot (google/flan-t5-base)...")
    preds_t5 = _predict_flan_t5(texts)
    metrics_t5 = _report(y_true, preds_t5, "FLAN-T5 Zero-shot Baseline")

    # Save artifacts
    out = {
        "samples": len(texts),
        "local": metrics_local,
        "flan_t5_zero_shot": metrics_t5,
    }
    with open(os.path.join(results_dir, "metrics.json"), "w", encoding="utf-8") as f:
        json.dump(out, f, indent=2)
    print(f"Saved metrics to {os.path.join(results_dir, 'metrics.json')}")

    pred_df = test_df.copy()
    pred_df["pred_local"] = preds_local
    pred_df["pred_local_label"] = [LABEL_MAP[i] for i in preds_local]
    pred_df["pred_t5"] = preds_t5
    pred_df["pred_t5_label"] = [LABEL_MAP[i] for i in preds_t5]
    pred_df.to_csv(os.path.join(results_dir, "predictions.csv"), index=False)
    print(f"Saved predictions to {os.path.join(results_dir, 'predictions.csv')}")


if __name__ == "__main__":
    main()

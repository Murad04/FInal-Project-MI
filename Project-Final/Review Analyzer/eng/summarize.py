from transformers import pipeline

# Initialize the summarization pipeline
# We use 'google/flan-t5-base' which is an instruction-tuned model
# It follows instructions better than standard BART/T5 for concise tasks
try:
    summarizer = pipeline("text2text-generation", model="google/flan-t5-base", device=-1)  # CPU
except Exception as e:
    print(f"Error loading summarization model: {e}")
    summarizer = None


def summarize_reviews(reviews):
    """
    Summarizes a list of reviews into a single sentence (or two),
    using FLAN-T5 on CPU. Falls back to a static message if model isn't available.
    """
    if not reviews:
        return "No reviews to summarize."
    if summarizer is None:
        return "Summarizer unavailable."

    # Build an instruction with compact content to keep CPU fast
    # Limit length to avoid excessive tokenization time
    joined = " ".join(r.strip() for r in reviews if r and r.strip())
    if len(joined) > 2000:
        joined = joined[:2000]

    prompt = (
        "Summarize the following customer reviews in 1-2 sentences,and do not use the same sentences "
        "covering main positives and negatives succinctly: " + joined
    )

    try:
        out = summarizer(
            prompt,
            max_length=80,
            min_length=20,
            do_sample=True,
            top_p=0.9,
        )
        return out[0].get("generated_text", "") or "Could not generate summary."
    except Exception as e:
        print(f"Error during summarization: {e}")
        return "Could not generate summary."


if __name__ == "__main__":
    demo = [
        "Battery life is amazing, lasted me a whole week of commuting.",
        "A bit pricey, but worth every penny for the features.",
        "Sound quality is pristine, very balanced bass and treble.",
        "The touch controls are a bit finicky sometimes.",
    ]
    print(summarize_reviews(demo))

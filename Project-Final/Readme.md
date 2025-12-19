# LuxeMarket AI - Intelligent E-Commerce Platform

LuxeMarket is a modern e-commerce web application that leverages advanced Artificial Intelligence to enhance the shopping experience. It features real-time sentiment analysis of customer reviews and generates concise, AI-powered summaries to help users make informed decisions quickly.

## 🚀 Key Features

### 1. AI-Powered Sentiment Analysis
- **Model**: Custom fine-tuned **DistilBERT** model.
- **Function**: Analyzes individual customer reviews to classify them as **Positive**, **Negative**, or **Neutral**.
- **Visualization**: Displays a sentiment score and color-coded indicators (Green/Red/Gray) for each review.

### 2. Intelligent Review Summarization
- **Model**: **Google Flan-T5 Base** (Instruction-tuned).
- **Function**: Synthesizes all customer reviews into a single, coherent sentence.
- **Benefit**: Users get a quick overview of the product's pros and cons without reading every review.
- **On-Demand**: Summarization is triggered by the user to ensure fast initial page loads.

### 3. Premium User Interface
- **Design**: Built with **TailwindCSS** for a sleek, modern, and responsive aesthetic.
- **Interactivity**: Smooth transitions, modal views, and real-time updates without page reloads.

## 🛠️ Tech Stack

- **Backend**: Python, Flask
- **Machine Learning**: 
    - Hugging Face Transformers
    - PyTorch
    - Scikit-learn
    - Pandas / NumPy
- **Frontend**: 
    - HTML5
    - TailwindCSS (CDN)
    - Vanilla JavaScript

## 📦 Installation & Setup

1.  **Clone the repository**
    ```
    git clone <repository-url>
    cd "Review Analyzer"
    ```

2.  **Install Dependencies**
    Ensure you have Python 3.8+ installed.
    ```
    pip install -r requirements.txt
    ```

3.  **Run the Application**
    ```
    python app.py
    ```

4.  **Access the App**
    Open your browser and navigate to:
    `http://127.0.0.1:5000`

## ⚠️ Important Notes

- **First Run**: When you run the application or trigger a feature for the first time, it will download the necessary AI models (DistilBERT and Flan-T5) from Hugging Face. This may take a few minutes depending on your internet connection.
- **Performance**: Summarization is a computationally intensive task. We've optimized it by making it on-demand, but it may still take a few seconds on machines without a dedicated GPU.

## 📂 Project Structure

- `Review Analyzer/app.py`: Main Flask application entry point.
- `Review Analyzer/eng/`: Engineering folder containing ML logic.
    - `predict.py`: Sentiment analysis logic.
    - `summarize.py`: Review summarization logic.
        - `baseline_auto.py`: Automatic baseline evaluation for local DistilBERT and FLAN‑T5; saves metrics and predictions.
- `Review Analyzer/static/`: CSS and JavaScript files.
- `Review Analyzer/templates/`: HTML templates.

## 📏 Baseline Evaluation

Run the automated baseline to evaluate your local DistilBERT model alongside a zero‑shot FLAN‑T5 classifier:

```
cd "Project-Final/Review Analyzer"
python eng/baseline_auto.py
```

What it does:
- Detects a local DistilBERT model directory automatically (prefers `eng/model_output` or `eng/results/checkpoint-400`).
- Ensures the dataset (`eng/sentiment_data.csv`) exists; if missing, it is generated via `eng/data_loader.py`.
- Uses a stratified split on a 40% sample (test size 20%).
- Evaluates both Local DistilBERT and FLAN‑T5 (google/flan-t5-base) as a zero‑shot baseline.
- Prints accuracy and classification report; saves artifacts to:
    - `Review Analyzer/eng/results/baseline_auto/metrics.json`
    - `Review Analyzer/eng/results/baseline_auto/predictions.csv`

Notes:
- The first FLAN‑T5 run will download model weights (internet required).
- To evaluate a different local DistilBERT directory, place it under `eng/model_output` or `eng/results/checkpoint-400`, or adjust paths in `eng/baseline_auto.py`.

from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import sys
import os

# Add the 'eng' directory to the system path so we can import predict
sys.path.append(os.path.join(os.path.dirname(__file__), 'eng'))

try:
    from predict import predict_sentiment
except ImportError as e:
    print(f"Error importing predict_sentiment: {e}")
    # Mock function if import fails (for testing without model)
    def predict_sentiment(text):
        return "Neutral"

try:
    from summarize import summarize_reviews
except ImportError as e:
    print(f"Error importing summarize_reviews: {e}")
    def summarize_reviews(reviews):
        return "Summarization unavailable."

app = Flask(__name__, static_folder='static', template_folder='templates')
CORS(app)  # Enable CORS for all routes

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/analyze', methods=['POST'])
def analyze_reviews():
    data = request.json
    reviews = data.get('reviews', [])
    
    if not reviews:
        return jsonify({"error": "No reviews provided"}), 400
    
    results = []
    sentiment_counts = {"Positive": 0, "Negative": 0, "Neutral": 0}
    
    for review in reviews:
        # predict_sentiment expects a string
        sentiment = predict_sentiment(review)
        if sentiment:
            results.append({"review": review, "sentiment": sentiment})
            sentiment_counts[sentiment] = sentiment_counts.get(sentiment, 0) + 1
        else:
             results.append({"review": review, "sentiment": "Unknown"})

    # Determine overall decision using weighted score
    # Positive: +1, Negative: -1, Neutral: 0
    score = (sentiment_counts["Positive"] * 1) + (sentiment_counts["Negative"] * -1)

    if score > 0:
        decision = "Positive"
    elif score < 0:
        decision = "Negative"
    else:
        decision = "Neutral"
    
    response = {
        "individual_results": results,
        "summary": {
            "counts": sentiment_counts,
            "decision": decision,
            "score": score
        }
    }
    
    return jsonify(response)

@app.route('/summarize', methods=['POST'])
def summarize_reviews_route():
    data = request.json
    reviews = data.get('reviews', [])
    
    if not reviews:
        return jsonify({"error": "No reviews provided"}), 400
        
    summary_text = summarize_reviews(reviews)
    
    return jsonify({"summary": summary_text})

if __name__ == '__main__':
    app.run(debug=True, port=5000)

import requests
import json

url = "http://localhost:5000/analyze"
data = {
    "reviews": [
        "Absolutely love this! Best purchase ever.",
        "This is garbage. Do not buy.",
        "Waste of money. It broke immediately.",
        "Horrible customer service and bad quality.",
        "It is what it is. Average.",
        "Not bad, but not great either."
    ]
}

try:
    response = requests.post(url, json=data)
    print(f"Status Code: {response.status_code}")
    print("Response JSON:")
    print(json.dumps(response.json(), indent=2))
except Exception as e:
    print(f"Error: {e}")

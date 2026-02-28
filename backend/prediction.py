import pickle
import numpy as np

# Load the trained model
with open("model.pkl", "rb") as f:
    model = pickle.load(f)

def predict_risk(data):
    hr = data.get("heart_rate", 0)
    spo2 = data.get("spo2", 0)
    age = data.get("age", 0)

    if hr > 100 or spo2 < 95 or age > 60:
        return "High"
    elif hr > 80 or spo2 < 97:
        return "Medium"
    else:
        return "Low"
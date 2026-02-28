from flask import Flask, request, jsonify
from prediction import predict_risk
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow React frontend to call this API

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    risk_level = predict_risk(data)
    return jsonify({"risk_level": risk_level})

if __name__ == "__main__":
    app.run(debug=True)
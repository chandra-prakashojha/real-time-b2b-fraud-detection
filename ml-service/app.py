from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np

app = FastAPI()

model = joblib.load("fraud_model.pkl")


class FraudRequest(BaseModel):
    request_count: int
    failed_logins: int
    login_velocity: int


@app.get("/health")
def health():
    return {
        "status": "ML Service Running"
    }


@app.post("/predict-risk")
def predict_risk(data: FraudRequest):

    features = np.array([
        [
            data.request_count,
            data.failed_logins,
            data.login_velocity
        ]
    ])

    prediction = model.predict(features)[0]

    if prediction == -1:

        return {
            "riskScore": 90,
            "severity": "HIGH",
            "isSuspicious": True
        }

    return {
        "riskScore": 20,
        "severity": "LOW",
        "isSuspicious": False
    }
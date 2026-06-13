
import pandas as pd
from sklearn.ensemble import IsolationForest
import joblib

# Load Dataset
data = pd.read_csv("fraud_data.csv")

# Features
X = data[
    [
        "request_count",
        "failed_logins",
        "login_velocity"
    ]
]

# Train Model
model = IsolationForest(
    contamination=0.1,
    random_state=42
)

model.fit(X)

# Save Model
joblib.dump(
    model,
    "fraud_model.pkl"
)

print("Model Trained Successfully")
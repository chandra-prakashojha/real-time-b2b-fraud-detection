# Real-Time B2B Fraud Detection & API Security Gateway

A microservices-based fraud detection and API security platform designed to monitor user behavior, detect suspicious activities, generate fraud risk scores, and provide security alerts in real time.

---

# Project Status

🚧 In Development

Current Completion: ~75%

Completed:

* Authentication & Authorization
* Redis Security Layer
* FastAPI ML Microservice
* Isolation Forest Fraud Detection
* Risk Scoring Engine
* Node.js ↔ FastAPI Communication
* Dockerized Redis

Upcoming:

* React Dashboard
* Socket.IO Real-Time Monitoring
* BullMQ Background Processing
* Docker Compose
* AWS Deployment

---

# Architecture

```text
Client
   │
   ▼
Node.js API Gateway
   │
   ├── JWT Authentication
   ├── RBAC
   ├── Fraud Alert Engine
   └── Redis Security Layer
   │
   ▼
FastAPI ML Service
   │
   └── Isolation Forest Model
   │
   ▼
MongoDB Atlas
```

---

# Tech Stack

## Backend

* Node.js
* Express.js
* JWT
* bcrypt
* MongoDB Atlas
* Mongoose

## Security Layer

* Redis
* Docker

## Machine Learning

* Python
* FastAPI
* Scikit-Learn
* Isolation Forest
* Pandas
* NumPy
* Joblib

## Tools

* Git
* GitHub
* Postman
* VS Code
* GitHub Codespaces

---

# Features Implemented

## Authentication System

### User Registration

* Input validation
* Password hashing using bcrypt
* Duplicate email prevention

### User Login

* Credential verification
* JWT token generation
* Protected route support

---

# Role-Based Access Control (RBAC)

Roles:

* ADMIN
* ANALYST
* USER

Provides controlled access to protected resources.

---

# Failed Login Detection

Tracks:

```text
failedLoginAttempts
```

Rules:

* 5 failed logins → Risk Score +20

* Alert generated

* 10 failed logins → Account Locked

* Critical alert generated

Alert Types:

* MULTIPLE_FAILED_LOGINS
* ACCOUNT_LOCKED

---

# Redis Security Layer

Redis is used for:

* Login velocity tracking
* Real-time security analytics

### Login Velocity Detection

Redis Key:

```text
velocity:userId
```

Rules:

* Counter expires after 60 seconds
* More than 5 successful logins within 60 seconds triggers an alert

Alert Type:

```text
HIGH_LOGIN_VELOCITY
```

---

# Machine Learning Fraud Detection Service

A dedicated FastAPI microservice performs fraud analysis.

## Endpoints

### Health Check

```http
GET /health
```

Response:

```json
{
  "status": "ML Service Running"
}
```

---

### Risk Prediction

```http
POST /predict-risk
```

Request:

```json
{
  "request_count": 500,
  "failed_logins": 100,
  "login_velocity": 100
}
```

Response:

```json
{
  "riskScore": 90,
  "severity": "HIGH",
  "isSuspicious": true
}
```

---

# Dataset Generation

Synthetic fraud data generated using:

```text
request_count
failed_logins
login_velocity
```

Generated file:

```text
fraud_data.csv
```

Records:

```text
1000+
```

---

# Isolation Forest Model

Fraud detection uses:

```text
Isolation Forest
```

Training Features:

* Request Count
* Failed Login Attempts
* Login Velocity

Model File:

```text
fraud_model.pkl
```

---

# Node.js ↔ FastAPI Communication

Node.js sends activity metrics to FastAPI using Axios.

Flow:

```text
User Login
      ↓
Node.js API Gateway
      ↓
Axios Request
      ↓
FastAPI Service
      ↓
Isolation Forest Model
      ↓
Risk Score
      ↓
Node.js
```

---

# Fraud Alert Engine

Generated Alerts:

* MULTIPLE_FAILED_LOGINS
* ACCOUNT_LOCKED
* HIGH_LOGIN_VELOCITY
* ML_FRAUD_DETECTED

Alerts are stored in MongoDB for future monitoring and analytics.

---

# Project Structure

```text
real-time-b2b-fraud-detection/

├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── utils/
│
├── ml-service/
│   ├── app.py
│   ├── generate_data.py
│   ├── train_model.py
│   ├── fraud_data.csv
│   ├── fraud_model.pkl
│   └── venv/
│
├── .env
├── package.json
└── README.md
```

---

# Running the Project

## Start Redis

```bash
docker start redis-server
```

---

## Start Backend

```bash
npm start
```

Backend:

```text
http://localhost:5000
```

---

## Start ML Service

```bash
cd ml-service

source venv/bin/activate

uvicorn app:app --reload --port 8000
```

ML Service:

```text
http://localhost:8000
```

---

# Future Enhancements

* React Dashboard
* Recharts Analytics
* Socket.IO Real-Time Alerts
* BullMQ Job Processing
* Docker Compose
* AWS Deployment
* Production Logging
* Monitoring & Observability

---

# Resume Highlights

* Built a microservices-based fraud detection platform using Node.js, Redis, FastAPI, and MongoDB.
* Developed an Isolation Forest anomaly detection model for fraud risk analysis.
* Implemented Redis-powered login velocity detection and account security controls.
* Integrated machine learning predictions into the authentication workflow.
* Designed a scalable architecture supporting future real-time monitoring and distributed services.

---

# Current Progress

```text
Week 1  ✅ Complete
Week 2  ✅ Complete
Week 3  ✅ Complete

Overall Project Progress ≈ 75%
Backend Completion ≈ 90%
```

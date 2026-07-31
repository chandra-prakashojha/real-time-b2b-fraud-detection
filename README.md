# 🛡️ Real-Time B2B Fraud Detection & API Security Gateway

> An enterprise-grade microservices-based API Security Gateway that secures APIs, detects fraudulent activities in real time, and provides live monitoring using Machine Learning, Redis, Docker, and AWS.

![Node.js](https://img.shields.io/badge/Node.js-22.x-green)
![Express.js](https://img.shields.io/badge/Express.js-Backend-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)
![Redis](https://img.shields.io/badge/Redis-Cache-red)
![Python](https://img.shields.io/badge/Python-FastAPI-blue)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue)
![AWS](https://img.shields.io/badge/AWS-EC2-orange)
![Swagger](https://img.shields.io/badge/API-Swagger-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

# 📌 Project Overview

The **Real-Time B2B Fraud Detection & API Security Gateway** is a production-inspired backend platform designed to protect enterprise APIs against suspicious activities and fraudulent behavior.

The platform combines modern backend technologies such as **Node.js**, **Redis**, **MongoDB**, **FastAPI**, and **Machine Learning** to continuously monitor user behavior, analyze API traffic, detect anomalies, and generate fraud alerts in real time.

Unlike traditional authentication systems that only verify user credentials, this platform continuously evaluates request patterns, login behavior, request velocity, and machine learning predictions before determining the risk associated with a user.

The project follows a **microservices architecture**, where the Node.js API Gateway communicates with an independent FastAPI Machine Learning service while Redis provides high-performance caching and security optimizations.

---

# 🎯 Objectives

The primary objectives of this project are:

- Secure REST APIs using JWT Authentication and Role-Based Access Control (RBAC)
- Detect suspicious login activities and abnormal API usage
- Identify fraudulent behavior using an Isolation Forest Machine Learning model
- Reduce database load using Redis Dashboard Caching
- Prevent API abuse using Redis Sliding Window Rate Limiting
- Provide real-time dashboard updates using Socket.IO
- Deploy a scalable containerized application using Docker and AWS EC2

---

# 🚀 Key Features

## 🔐 Authentication & Authorization

- JWT Authentication
- Password Hashing using bcrypt
- Role-Based Access Control (ADMIN / ANALYST / USER)
- Protected REST APIs
- Request Validation using Joi

---

## 🛡️ API Security

- Redis Sliding Window Rate Limiter
- Login Velocity Detection
- Failed Login Monitoring
- Automatic Account Locking
- Fraud Alert Generation

---

## 🤖 Machine Learning Fraud Detection

- FastAPI Microservice
- Isolation Forest Algorithm
- Fraud Risk Prediction
- Synthetic Dataset Generation
- Real-Time ML Inference

---

## ⚡ Performance Optimization

- Redis Dashboard Cache
- Cache-Aside Pattern
- Automatic Cache Expiration (TTL)
- Graceful Cache Fallback
- Optimized Dashboard Analytics

---

## 📡 Real-Time Monitoring

- Socket.IO Integration
- Live Dashboard Updates
- Real-Time API Logs
- Fraud Alert Streaming

---

## 🐳 Deployment & DevOps

- Dockerized Backend
- Dockerized Frontend
- Dockerized ML Service
- Docker Compose
- AWS EC2 Deployment
- MongoDB Atlas
- Redis Container

---

## 📑 API Documentation

- Swagger UI
- RESTful APIs
- Health Check Endpoints
- API Testing Support

---

# 📊 Project Status

## ✅ Production Ready

### Implemented Features

- ✅ JWT Authentication
- ✅ Role-Based Access Control (RBAC)
- ✅ Redis Sliding Window Rate Limiter
- ✅ Login Velocity Detection
- ✅ Redis Dashboard Cache (Cache-Aside Pattern)
- ✅ FastAPI Machine Learning Service
- ✅ Isolation Forest Fraud Detection
- ✅ Fraud Risk Scoring
- ✅ Socket.IO Real-Time Dashboard
- ✅ BullMQ Background Worker
- ✅ Dockerized Microservices
- ✅ Docker Compose
- ✅ AWS EC2 Deployment
- ✅ MongoDB Atlas Integration
- ✅ Swagger API Documentation
- ✅ Centralized Error Handling
- ✅ Request Validation
- ✅ Production Logging
# 🏗️ System Architecture

The application follows a **Microservices Architecture**, where each service has a dedicated responsibility. The Node.js API Gateway acts as the central entry point, coordinating authentication, security, fraud detection, and communication with external services.

```text
                                           ┌──────────────────────────────────┐
                                           │        React Frontend            │
                                           │----------------------------------│
                                           │ • Login                          │
                                           │ • Dashboard                      │
                                           │ • Analytics                      │
                                           │ • Live Monitoring                │
                                           └───────────────┬──────────────────┘
                                                           │
                                                     HTTP / REST
                                                           │
                                                           ▼
                   ┌──────────────────────────────────────────────────────────────┐
                   │          Express API Gateway (Node.js)                      │
                   ├──────────────────────────────────────────────────────────────┤
                   │ JWT Authentication                                          │
                   │ Role-Based Access Control (RBAC)                            │
                   │ Request Validation (Joi)                                    │
                   │ Logging Middleware                                          │
                   │ Error Handling                                              │
                   └───────────────────────┬──────────────────────────────────────┘
                                           │
                                           ▼
                             Sliding Window Rate Limiter
                                           │
                                           ▼
                                   Redis Security Layer
                         ┌─────────────────┴─────────────────┐
                         │                                   │
                         ▼                                   ▼
                Login Velocity Tracking             Dashboard Cache
                         │
                         ▼
                  Fraud Detection Engine
                         │
              ┌──────────┴────────────┐
              │                       │
              ▼                       ▼
      MongoDB Atlas            FastAPI ML Service
   ┌──────────────────┐     ┌─────────────────────┐
   │ Users            │     │ Isolation Forest    │
   │ Alerts           │     │ Fraud Prediction    │
   │ API Logs         │     │ Risk Score Engine   │
   └─────────┬────────┘     └──────────┬──────────┘
             │                         │
             └──────────┬──────────────┘
                        ▼
               BullMQ Background Worker
                        │
                        ▼
                 Socket.IO Server
                        │
                        ▼
          Live Dashboard & Fraud Alerts
```

---

## Architecture Components

### 🌐 React Frontend

The React application provides an interactive user interface for authentication, dashboard analytics, fraud monitoring, and administrative operations. It communicates with the backend through REST APIs and receives live updates via Socket.IO.

---

### 🚪 Express API Gateway

The Node.js API Gateway acts as the central entry point for all client requests. It is responsible for:

- Authentication
- Authorization
- Request Validation
- Rate Limiting
- Logging
- Fraud Detection Coordination
- Dashboard APIs

---

### 🔴 Redis Security Layer

Redis improves both security and application performance.

Implemented features include:

- Sliding Window Rate Limiting
- Login Velocity Detection
- Dashboard Response Caching (Cache-Aside Pattern)

---

### 🗄️ MongoDB Atlas

MongoDB serves as the primary database for persistent storage.

Collections include:

- Users
- Alerts
- API Logs

---

### 🤖 FastAPI Machine Learning Service

A dedicated Python microservice performs fraud detection using an Isolation Forest model.

The service receives user activity metrics from the API Gateway and returns a fraud risk score used to generate alerts and update user risk profiles.

---

### ⚙️ BullMQ Worker

BullMQ processes fraud-related jobs asynchronously, preventing expensive background operations from blocking API requests.

---

### 📡 Socket.IO

Socket.IO enables real-time communication between the backend and the dashboard, allowing administrators to receive live API logs and fraud alerts without refreshing the page.

---
# 🛠️ Technology Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | React.js, Vite, Axios, React Router, Recharts, Socket.IO Client |
| **Backend** | Node.js, Express.js |
| **Authentication** | JWT (JSON Web Token), bcrypt |
| **Authorization** | Role-Based Access Control (RBAC) |
| **Validation** | Joi |
| **Database** | MongoDB Atlas, Mongoose |
| **Caching & Security** | Redis |
| **Machine Learning** | Python, FastAPI, Scikit-learn, Isolation Forest |
| **Real-Time Communication** | Socket.IO |
| **Background Processing** | BullMQ |
| **API Documentation** | Swagger UI |
| **Containerization** | Docker, Docker Compose |
| **Cloud Deployment** | AWS EC2 |
| **Development Tools** | Git, GitHub, GitHub Codespaces, Postman, VS Code |

---

# 📂 Project Structure

```text
real-time-b2b-fraud-detection/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   ├── hooks/
│   │   └── assets/
│   ├── Dockerfile
│   └── nginx.conf
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── workers/
│   ├── validation/
│   ├── utils/
│   └── sockets/
│
├── ml-service/
│   ├── app.py
│   ├── train_model.py
│   ├── generate_data.py
│   ├── fraud_model.pkl
│   ├── fraud_data.csv
│   ├── requirements.txt
│   └── Dockerfile
│
├── docker-compose.yml
├── Dockerfile
├── .env
├── package.json
└── README.md
```

---

# 📁 Project Modules

### 🌐 Frontend

Responsible for user interaction, authentication, dashboard visualization, analytics, and real-time monitoring.

---

### 🚪 API Gateway

Acts as the central entry point for all client requests. Handles authentication, authorization, validation, rate limiting, logging, fraud detection, and communication with external services.

---

### 🔴 Redis Layer

Provides:

- Sliding Window Rate Limiting
- Login Velocity Detection
- Dashboard Response Caching
- Temporary Data Storage

---

### 🗄️ MongoDB Atlas

Stores:

- User Information
- Fraud Alerts
- API Logs
- Risk Scores

---

### 🤖 Machine Learning Service

Independent FastAPI microservice responsible for fraud prediction using the Isolation Forest algorithm.

---

### ⚙️ BullMQ Worker

Processes background fraud detection jobs asynchronously to improve API responsiveness.

---

### 📡 Socket.IO

Provides real-time dashboard updates, API logs, and fraud alerts without requiring manual page refresh.

---
# 🔄 Request Lifecycle

This section explains how requests travel through the system, how different components interact, and how security mechanisms protect the platform before responding to the client.

---

# 🔐 User Authentication Flow

```text
User
   │
   ▼
React Login Page
   │
   ▼
POST /api/login
   │
   ▼
Express API Gateway
   │
   ▼
Validate Request (Joi)
   │
   ▼
Verify User Credentials
   │
   ▼
Generate JWT Token
   │
   ▼
Return JWT Token
   │
   ▼
React Stores Token
```

### Flow Explanation

1. The user submits login credentials.
2. The backend validates the request using Joi.
3. User credentials are verified against MongoDB.
4. If authentication succeeds, a JWT token is generated.
5. The frontend stores the token and sends it with every protected request.

---

# 🛡️ Protected API Request Flow

```text
Client Request
      │
      ▼
Authorization Header
      │
      ▼
JWT Authentication
      │
      ▼
RBAC Authorization
      │
      ▼
Rate Limiter
      │
      ▼
Controller
      │
      ▼
Database / ML Service
      │
      ▼
Response
```

### Flow Explanation

Every protected API request passes through multiple security layers:

- JWT Authentication
- Role-Based Access Control
- Sliding Window Rate Limiting
- Request Validation
- Logging Middleware

Only valid requests reach the business logic.

---

# ⚡ Dashboard Request Flow

```text
Dashboard Request
        │
        ▼
Express API Gateway
        │
        ▼
Redis Cache
   ┌──────────────┐
   │              │
Cache Hit     Cache Miss
   │              │
   ▼              ▼
Return      MongoDB
Response        │
                ▼
         Dashboard Statistics
                │
                ▼
      Store Response in Redis
                │
                ▼
          Return Response
```

### Flow Explanation

1. The frontend requests dashboard statistics.
2. The backend first checks Redis.
3. If cached data exists (Cache Hit), it is returned immediately.
4. If no cache exists (Cache Miss), MongoDB is queried.
5. The response is stored in Redis with a TTL of 60 seconds.
6. Future requests are served directly from Redis until the cache expires.

---

# 🤖 Fraud Detection Flow

```text
User Activity
      │
      ▼
API Gateway
      │
      ▼
Collect Activity Metrics
      │
      ▼
FastAPI ML Service
      │
      ▼
Isolation Forest Model
      │
      ▼
Risk Score Generated
      │
      ▼
Fraud Alert Created
      │
      ▼
MongoDB
      │
      ▼
Socket.IO
      │
      ▼
Live Dashboard Update
```

### Flow Explanation

The backend continuously monitors user behavior.

Metrics such as request count, failed logins, and login velocity are sent to the FastAPI Machine Learning service.

The Isolation Forest model predicts whether the activity is suspicious. If a high-risk prediction is returned, a fraud alert is generated, stored in MongoDB, and immediately pushed to the dashboard using Socket.IO.

---

# 🔴 Redis Security Flow

Redis is responsible for multiple security and performance optimizations within the application.

### Sliding Window Rate Limiting

```text
Incoming Request
        │
        ▼
Redis Sorted Set
        │
        ▼
Remove Expired Requests
        │
        ▼
Count Requests
        │
        ▼
Request Limit Exceeded?
      │           │
     Yes          No
      │           │
429 Response   Allow Request
```

---

### Login Velocity Detection

```text
Successful Login
        │
        ▼
Increment Redis Counter
        │
        ▼
Counter > Threshold?
      │          │
     Yes         No
      │          │
Generate Alert Continue
```

---

### Dashboard Cache

```text
Dashboard Request
        │
        ▼
Redis Cache
        │
   ┌────┴────┐
   │         │
Hit         Miss
 │           │
 ▼           ▼
Return    MongoDB
 │           │
 └────Store in Redis────┘
```

---

# 📡 Real-Time Monitoring Flow

```text
API Request
      │
      ▼
Logger Middleware
      │
      ▼
Store API Log
      │
      ▼
Socket.IO
      │
      ▼
React Dashboard
```

Administrators receive live API activity and fraud alerts without refreshing the dashboard.

---
# 🐳 Docker Architecture

The entire application is containerized using Docker to ensure consistency across development and deployment environments. Each service runs in an isolated container while communicating over a shared Docker network.

## Docker Containers

| Container | Purpose |
|-----------|---------|
| Frontend | React application served using Nginx |
| Backend | Express API Gateway |
| Redis | Caching, Rate Limiting & Login Velocity |
| ML Service | FastAPI Fraud Detection Microservice |

---

## Docker Architecture

```text
                     Docker Compose
                           │
      ┌────────────────────┼────────────────────┐
      │                    │                    │
      ▼                    ▼                    ▼
 React Frontend      Express Backend        FastAPI ML
      │                    │                    │
      └──────────────┬─────┴──────────────┐
                     ▼                    ▼
                 Redis              MongoDB Atlas
```

---

## Docker Features

- Independent Microservices
- Shared Docker Network
- Environment Variable Support
- Easy Deployment
- Container Isolation
- Scalable Architecture

---

# ☁️ AWS Deployment

The application is deployed on an AWS EC2 instance using Docker Compose.

## Deployment Stack

- AWS EC2
- Ubuntu Server
- Docker
- Docker Compose
- MongoDB Atlas
- Redis Container
- FastAPI ML Service
- Express Backend
- React Frontend

---

## Deployment Workflow

```text
GitHub
   │
   ▼
AWS EC2
   │
   ▼
Docker Compose
   │
   ▼
Frontend
Backend
Redis
ML Service
```

---

# 📑 API Documentation

Swagger UI is integrated into the backend for interactive API documentation.

## Available Documentation

- Authentication APIs
- Dashboard APIs
- ML APIs
- Admin APIs
- Health Check APIs

Access Swagger UI:

```text
http://localhost:5000/api-docs
```

---

# ⚙️ Environment Variables

### Backend

```env
PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key

REDIS_URL=redis://redis:6379

ML_SERVICE_URL=http://ml-service:8000
```

---

### ML Service

```env
MODEL_PATH=fraud_model.pkl
```

---

# 🚀 Running the Project

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/real-time-b2b-fraud-detection.git

cd real-time-b2b-fraud-detection
```

---

## Start Using Docker Compose

```bash
docker compose up --build
```

---

Frontend

```text
http://localhost:3000
```

Backend

```text
http://localhost:5000
```

Swagger

```text
http://localhost:5000/api-docs
```

ML Service

```text
http://localhost:8000
```

---

# 📈 Performance Optimizations

The platform includes multiple optimizations to improve scalability and response time.

- Redis Dashboard Cache (Cache-Aside Pattern)
- Sliding Window Rate Limiting
- Login Velocity Detection
- BullMQ Background Processing
- Graceful Cache Fallback
- ML Service Timeout Recovery
- Dockerized Microservices
- Efficient MongoDB Queries

---

# 🔐 Security Features

The platform secures APIs using multiple security layers.

- JWT Authentication
- Role-Based Access Control (RBAC)
- Password Hashing using bcrypt
- Joi Request Validation
- Redis Sliding Window Rate Limiting
- Login Velocity Detection
- Machine Learning Fraud Detection
- Secure Environment Variables
- Centralized Error Handling

---

# 📸 Screenshots

> Screenshots will be added after completing the frontend.

Example:

- Login Page
- Dashboard
- Analytics
- Swagger UI
- Docker Containers
- AWS Deployment
- Live Monitoring Dashboard

---

# 💼 Resume Highlights

- Designed and developed a production-inspired API Security Gateway using Node.js and Express.js.
- Implemented JWT Authentication and Role-Based Access Control (RBAC).
- Integrated Redis for Sliding Window Rate Limiting, Login Velocity Detection, and Dashboard Caching.
- Built a FastAPI Machine Learning microservice using the Isolation Forest algorithm for fraud detection.
- Developed a real-time monitoring dashboard using Socket.IO.
- Containerized the complete application using Docker and Docker Compose.
- Deployed the application on AWS EC2 with MongoDB Atlas.

---

# 🚀 Future Enhancements

- Kubernetes Deployment
- CI/CD Pipeline using GitHub Actions
- Prometheus Monitoring
- Grafana Dashboards
- Email & SMS Fraud Alerts
- Multi-Factor Authentication (MFA)
- OAuth 2.0 Integration
- API Gateway Load Balancing

---

# 👨‍💻 Author

**CHANDRA PRAKASH**

Master of Computer Applications (MCA)

Backend Developer | Node.js | Redis | Docker | AWS | Machine Learning

GitHub: https://github.com/chandra-prakashojha?tab=repositories

LinkedIn: https://www.linkedin.com/in/chandra-prakash-430996332/

---

If you found this project useful, consider giving it a ⭐ on GitHub.
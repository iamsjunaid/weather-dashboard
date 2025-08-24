# 🌦 Weather Dashboard

A full-stack MERN application that allows users to add cities and view their weather data in a clean dashboard.

---

## 🚀 Live Demo

- **Frontend (React + TypeScript + ShadCN UI)**: [Weather Dashboard Frontend](https://weather-dashboard-1-1l6m.onrender.com/)  
- **Backend (Node.js + Express + MongoDB)**: [Weather Dashboard API](https://weather-dashboard-d2kq.onrender.com)

---

## 📂 Project Structure

```
weather-dashboard/
│── backend/   # Node.js + Express + MongoDB + TypeScript
│── frontend/  # React + TypeScript + ShadCN UI
```

---

## ⚙️ Backend

### Tech Stack
- Node.js + Express.js
- MongoDB + Mongoose
- TypeScript
- Axios (for weather API requests)
- CORS + dotenv

### Scripts
```bash
# development
npm run dev

# build
npm run build

# production
npm start
```

The backend is deployed on Render:  
👉 [https://weather-dashboard-d2kq.onrender.com](https://weather-dashboard-d2kq.onrender.com)

---

## 💻 Frontend

### Tech Stack
- React + Vite
- TypeScript
- ShadCN UI + TailwindCSS
- Axios + React Query

### Scripts
```bash
# development
npm run dev

# build
npm run build

# production preview
npm run preview
```

The frontend is deployed on Render:  
👉 [https://weather-dashboard-1-1l6m.onrender.com/](https://weather-dashboard-1-1l6m.onrender.com/)

---

## 🔧 Setup (Local)

### 1. Clone Repo
```bash
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard
```

### 2. Backend Setup
```bash
cd backend
npm install
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### 4. Environment Variables

Backend `.env`:
```env
MONGO_URI=your_mongo_connection_string
WEATHER_API_KEY=your_api_key
PORT=5000
```

Frontend `.env`:
```env
VITE_BACKEND_URL=http://localhost:5000
```

---

## ✨ Features
- Add and delete cities
- View weather details (fetched from API)
- Minimal and modern dashboard UI
- Persistent data storage in MongoDB

---

## 📜 License
MIT

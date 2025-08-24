# 🌤️ Weather Dashboard

A full-stack weather dashboard where users can add/remove cities and view real-time weather data.  
The project integrates with the **OpenWeather API** and includes caching, error handling, and a minimal modern UI.

---

## 🚀 Live Demo

- **Backend**: [Weather Dashboard API](https://weather-dashboard-d2kq.onrender.com)  
- **Frontend**: [Weather Dashboard UI](https://weather-dashboard-1-1l6m.onrender.com/)

---

## 📦 Tech Stack

### **Backend**
- **Node.js + Express.js** → Web server and REST API  
- **TypeScript** → Type safety for cleaner, more maintainable code  
- **MongoDB (Mongoose)** → Database for storing cities and cached weather data  
- **Axios** → For calling the OpenWeather API  
- **dotenv** → Manage environment variables  
- **CORS** → Handle cross-origin requests

### **Frontend**
- **React + TypeScript** → Component-based UI  
- **ShadCN UI** → Prebuilt, accessible, and modern components  
- **Tailwind CSS** → Utility-first CSS framework for styling  
- **React Query** → Data fetching, caching, and synchronization  

---

## ⚙️ Setup Instructions

### **Backend**
1. Clone repo and navigate to `backend/`
   ```bash
   cd backend
   npm install
   ```
2. Create a `.env` file:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection
   OPENWEATHER_API_KEY=your_openweather_api_key
   ```
3. Run locally:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   npm start
   ```

### **Frontend**
1. Navigate to `frontend/`
   ```bash
   cd frontend
   npm install
   ```
2. When backend is running, add the following to `src/services/weatherApi.ts` and `src/services/cityApi.ts`:
   ```typescript
   const API_URL = "http://localhost:5000";
   ```
3. Run locally:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   npm run preview
   ```

---

## 📖 API Documentation

### **Base URL**
```
https://weather-dashboard-d2kq.onrender.com
```

### **Endpoints**

#### `GET /weather/:city`
Fetch weather details for a city.  
Returns cached data if available.

**Response Example**
```json
{
  "city": "London",
  "temperature": 18,
  "description": "Cloudy",
  "humidity": 75
}
```

#### `GET /cities`
Fetch all stored cities.

#### `POST /cities`
Add a new city.  
**Body Example**
```json
{ "name": "Paris" }
```

#### `DELETE /cities/:name`
Remove a city by name.

---

## ✅ Assumptions Made
- Single-user dashboard (no authentication required).  
- Cities are stored in MongoDB for persistence.  
- Weather data is cached to reduce API calls.  

---

## ⚠️ Known Limitations
- Only current weather is supported (no forecast).  
- No role-based or multi-user authentication.  
- Rate-limiting is not yet implemented for API protection.  

---

## 🌱 Future Improvements
- Add **5-day forecast** feature.  
- Implement **user accounts** for personalized dashboards.  
- Add **search suggestions** for city names.  
- Deploy with **Docker** for easier scaling.  
- Add **unit/integration tests**.  

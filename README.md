# 🌦️ Weather Dashboard

A simple weather dashboard built with **React (TypeScript)** and
**Node.js/Express** that fetches weather data from the [OpenWeather
API](https://openweathermap.org/api).\
Users can add and remove cities, view live weather, and benefit from
caching to reduce API calls.

------------------------------------------------------------------------

## 🚀 Features

-   Add / remove cities dynamically.
-   Displays real-time weather details (temperature, humidity, pressure,
    conditions).
-   Caching layer to minimize redundant API calls.
-   Error handling with clear messages.
-   Minimal UI built with TailwindCSS.

------------------------------------------------------------------------

## 🗂 Project Structure

    /backend
      ├── server.ts          # Express server
      ├── routes/
      │   ├── cities.ts      # Manage cities (add/remove/list)
      │   └── weather.ts     # Fetch weather from OpenWeather API
      ├── services/
      │   ├── weatherService.ts # Calls OpenWeather API
      │   └── cache.ts       # Simple in-memory caching
      └── db.ts              # Database (if persistent storage is used)

    /frontend
      ├── src/
      │   ├── components/    # CityForm, CityCard
      │   ├── pages/         # Dashboard
      │   └── services/      # API calls to backend
      ├── App.tsx
      └── main.tsx

    .gitignore
    README.md

------------------------------------------------------------------------

## ⚙️ Setup Instructions

### 1. Clone the Repository

``` bash
git clone https://github.com/iamsjunaid/weather-dashboard.git
cd weather-dashboard
```

### 2. Backend Setup

``` bash
cd backend
npm install
```

Create a `.env` file in `/backend`:

    PORT=4000
    OPENWEATHER_API_KEY=your_openweather_api_key_here

Run backend:

``` bash
npm run dev
```

### 3. Frontend Setup

``` bash
cd frontend
npm install
npm run dev
```

The app will start at:\
👉 **Frontend:** `http://localhost:5173`\
👉 **Backend:** `http://localhost:4000`

------------------------------------------------------------------------

## 🔑 Get OpenWeather API Key

1.  Sign up at [OpenWeather](https://openweathermap.org/).
2.  Go to **My API Keys** section.
3.  Copy your API key and add it in `.env`.

------------------------------------------------------------------------

## 🧪 Testing

-   Open the app in browser.
-   Add a city (e.g., `London`, `New York`).
-   Weather card should appear.
-   Remove the city to test delete functionality.
-   Restart app to check persistence if database is enabled.

------------------------------------------------------------------------

## 🛠 Tech Stack

-   **Frontend:** React, TypeScript, TailwindCSS
-   **Backend:** Node.js, Express
-   **Database (optional):** PostgreSQL / MongoDB
-   **API:** OpenWeatherMap

------------------------------------------------------------------------

## 📌 Todo / Improvements

-   Add user accounts (multi-user support).
-   Store cities in persistent DB (currently single-user demo).
-   Add forecast charts.
-   Mobile-friendly enhancements.

------------------------------------------------------------------------
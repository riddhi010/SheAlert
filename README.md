# 🚨 SheAlert: Real-Time Women’s Safety Assistance

**Status: 🚧 In Development (March 2025 – Present)**

SheAlert is a full-stack web application aimed at enhancing women's safety through real-time alerts, geolocation tracking, safe route mapping, and anonymous incident reporting. The goal is to provide a digital safety companion that responds proactively in moments of need.

---

## 🌟 Key Features (In Progress)

- ✅ **Real-time SOS Alerts** to trusted contacts via SMS (Twilio API)
- ✅ **Geolocation Tracking** for live location sharing
- 🔄 **Safe Route Mapping** using Google Maps API
- 🔄 **Night Mode Checker** to alert users of potential nighttime risks
- 🔄 **Anonymous Reporting** to local authorities or security services
- 🕵️‍♀️ **Privacy-Focused Design** with secure, minimal data collection

> 🚧 Features marked with "🔄" are under development or enhancement

---

## 🧰 Tech Stack

### 🔹 Frontend
- React.js
- Tailwind CSS
- Google Maps API
- Geolocation API

### 🔸 Backend
- Node.js
- Express.js
- MongoDB

### 🔌 APIs & Integrations
- Twilio API (SMS alerts)
- Google Maps & Places API (location-based services)

---

## 📂 Project Structure


---

## 🚀 Getting Started (Development Setup)

> **Note:** This project is still under active development. Core functionality is being built out module by module.

### Prerequisites

- Node.js v14+
- MongoDB
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/shealert.git
   cd shealert
# Frontend setup
cd client
npm install

# Backend setup
cd ../server
npm install

# Environment Variables
MONGO_URI=your_mongodb_uri
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone
GOOGLE_MAPS_API_KEY=your_google_maps_api_key

# Running the project

# In two separate terminals:

# Frontend
cd client
npm start

# Backend
cd server
npm run dev

👩‍💻 Author
Riddhi [Your Last Name]
Computer Science Engineering Student

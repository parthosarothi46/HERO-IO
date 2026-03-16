# HERO IO – Productive Apps Platform

## Description
HERO IO is a modern app discovery platform that showcases a curated collection of productivity applications. Users can browse apps, view detailed information including ratings and download stats, install apps to their personal list, and manage their installations — all in a clean, responsive interface.

## Features
- 🏠 **Home Page** – Hero banner, stats section, trending apps grid
- 📱 **All Apps** – Live search, sort by downloads, full app grid
- 📊 **App Details** – Recharts rating visualization, install with localStorage persistence
- 💾 **My Installation** – View & uninstall your saved apps, sort by size
- ❌ **Custom Error Pages** – 404 page + App Not Found state
- ⚡ **Loading Animations** – Page transitions and search debounce
- 📱 **Fully Responsive** – Mobile, tablet, and desktop support

## Technologies
- **React JS** (v19) + **JavaScript**
- **Tailwind CSS** – Utility-first styling
- **React Router DOM** (v6) – Client-side routing
- **Recharts** – Rating bar chart visualization
- **React Hot Toast** – Toast notifications
- **LocalStorage** – Persist installed apps across sessions

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── AppCard.jsx
│   └── LoadingScreen.jsx
├── pages/
│   ├── Home.jsx
│   ├── Apps.jsx
│   ├── AppDetails.jsx
│   ├── Installation.jsx
│   └── NotFound.jsx
├── data/
│   └── data.js
├── App.jsx
├── index.css
└── main.jsx
```

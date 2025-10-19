# Habitual Curator 🌀
**AI-Powered Personalized Micro-Habit Discovery & Tracking App**

Habitual Curator helps users discover, customize, and track unique micro-habits based on their personality, goals, and daily context.  
Built with a playful, adaptive, and privacy-first approach.

---

## 🚀 Overview

Habitual Curator is a smart, AI-driven habit tracker that suggests **quirky, science-backed micro-habits** and adapts them based on user engagement, feedback, and contextual data.  
Think: “Stand on one leg while brushing your teeth” or “Send a gratitude text every Thursday.”

---

## ✨ Features

### 👋 Onboarding
- Captures personality tone, goals, and daily availability.
- Optional context permissions (calendar, location).
- Generates personalized initial habit suggestions.

### 🏠 Dashboard
- Displays personalized greetings and daily micro-habits.
- Quick actions: *Do it*, *Remind me*, *Save for later*.
- Streak & micro-win tracking.

### 🔍 Discover
- AI-generated micro-habit feed grouped by themes: Focus, Movement, Creativity, Social, Calm, Sleep.
- Each card shows duration, trigger, and a short science-backed description.
- Options to *Save*, *Try now*, or *Customize*.

### 🧠 Adaptive Engine
- Learns from completion data, difficulty ratings, and feedback.
- Suggests simplified or advanced variants dynamically.
- Uses a lightweight bandit algorithm for experimentation.

### 📊 Progress & Insights
- Visual analytics (streaks, category distribution, completion rate).
- Quick journal & export logs (CSV).

### ⚙️ Settings
- Manage reminders, saved habits, integrations, and privacy.
- Delete data locally or from cloud anytime.

---

## 🧩 Tech Stack (Lovable Scaffold)

| Layer | Tech |
|-------|------|
| Frontend | React + Tailwind (PWA / Mobile-first) |
| Backend | Node.js + Express (API stub) |
| AI Logic | Mock ML module (bandit-based recommender) |
| Data | seed_data.json (50+ micro-habits) |
| Storage | Local-first with optional encrypted cloud sync |

---

## 📁 Folder Structure

```
habitual-curator/
│
├── frontend/               # React UI (Tailwind-based)
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── assets/
│   └── App.jsx
│
├── backend/                # Node/Express backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── server.js
│
├── ml/                     # Recommendation logic mock
│   └── recommender.js
│
├── data/
│   └── seed_data.json
│
├── README.md
└── package.json
```

---

## ⚡ API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/v1/discover?goals=Focus,Creativity&time=10` | Get AI-ranked suggestions |
| POST | `/api/v1/habits` | Create a custom habit |
| POST | `/api/v1/sessions` | Log habit completion |
| GET | `/api/v1/users/{id}/insights` | Fetch user insights |

---

## 🧠 Example JSON Models

### User
```json
{
  "id": "user_001",
  "name": "Maya",
  "personality_tone": "Playful",
  "goals": ["Focus", "Creativity"],
  "daily_time_mins": 10
}
```

### Habit
```json
{
  "id": "habit_082",
  "title": "Balance Brush",
  "duration_mins": 1,
  "category": "Movement",
  "difficulty": 1,
  "trigger": "While brushing teeth"
}
```

### Session Log
```json
{
  "id": "session_993",
  "user_id": "user_001",
  "habit_id": "habit_082",
  "timestamp": "2025-10-19T07:32:00+05:30",
  "rating": "easy"
}
```

---

## 🧪 Acceptance Criteria

- ✅ After onboarding, Discover shows 12+ relevant suggestions.
- ✅ Logging a habit triggers animation and streak increment.
- ✅ Adaptive engine simplifies habits after repeated difficulty.
- ✅ User can export last 30 days of logs as CSV.

---

## 🛠️ Setup Instructions

1. **Clone repo** or import from Lovable.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run backend:
   ```bash
   cd backend && npm start
   ```
4. Run frontend:
   ```bash
   cd frontend && npm run dev
   ```

App will be live at: `http://localhost:5173` (default).

---

## 🧭 Design Notes

- Tone: warm, playful, encouraging.
- Accessibility: large touch targets, alt text, dyslexia-friendly fonts.
- Animations: short confetti bursts, emoji micro-celebrations.
- Optional localization support (EN default).

---

## 📬 Contact / Next Steps

This scaffold is ready for prototype → beta phase.  
Next tasks:
- Integrate real ML recommendations.
- Add Firebase/Clerk authentication.
- Enable push notifications (web + mobile).

---

**“Tiny habits. Big differences.” — Habitual Curator 🌀**

# StudyBuddy
**An AI-powered active recall engine with a gamification layer.**

## 🧠 The Philosophy
My personal study tool to help quickly summarize text/transcripts/PDFs, and generate quizzes, flashcards and millionaire mode.
*   **Frictionless Entry:** No login required to generate content.
*   **Gamified Reinforcement:** "Millionaire Mode" uses game theory to fix retention.

## 🚀 Key Features
*   **Millionaire Mode:** A progressive difficulty quiz engine ($100 -> $1M).
*   **Smart Parsing:** Ingests raw text/PDFs and structures them into study materials via Gemini JSON output.
*   **Glassmorphic UI:** Custom dark mode with backdrop-blur for late-night sessions.

## 🛠 Tech Stack
*   **Frontend:** Next.js 14 (App Router), Tailwind CSS
*   **Backend:** Supabase (PostgreSQL, RLS)
*   **AI:** Gemini API (Structured JSON)

## ⚙️ Getting Started
```bash
git clone ...
cd StudyBuddy
npm install
npm run dev
```

Create a `.env.local` file and add:

```env
GEMINI_API_KEY=...
NEXT_PUBLIC_GEMINI_API_KEY=...
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
```

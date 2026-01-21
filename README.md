# 🧠 MindVault

MindVault is a lightweight **notes application** built with React that allows users to create, edit, search, sort, and delete notes — all handled entirely on the frontend.

The goal of MindVault is simplicity, clarity, and predictable behavior rather than over-engineering.

---

## ✨ Features

- ✍️ Create and edit notes
- 🗑️ Delete notes
- 🔍 Frontend search filtering (title & content)
- ↕️ Frontend sorting (latest / oldest)
- 💾 Session-based persistence using `sessionStorage`
- ✅ Form validation for note creation & editing
- 📱 Responsive, clean UI with smooth interactions

---

## 🛠️ Tech Stack

- **React**
- **Tailwind CSS**
- **Lodash** (for safe and readable data operations)
- **SimpleBar** (custom scroll behavior)

---

## 📦 Data Handling

- All notes are stored in **`sessionStorage`**
- No backend or database is used
- Data persists only for the duration of the browser session

This keeps the app fast, simple, and completely frontend-driven.

---

## 🔍 Search & Sorting

- Notes can be searched by **title or content**
- Sorting is handled on the frontend
- No server-side filtering or pagination

---

## ✅ Form Validation

- Prevents empty submissions
- Ensures meaningful note content
- Handles edit and create flows cleanly

---

## 🎯 Design Philosophy

MindVault focuses on:

- Readable, maintainable code
- Minimal abstractions
- Clear user intent
- Avoiding unnecessary complexity
- Using battle-tested utilities where appropriate

This project prioritizes **engineering judgment** over feature bloat.

---

## 🚀 Getting Started

```bash
npm install
npm start
```

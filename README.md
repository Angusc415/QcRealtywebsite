# QC Realty Website

A real estate web app built with TypeScript, React, and MongoDB.

## 🌐 Overview

QC Realty is designed to allow property listings with support for backend data storage using MongoDB. The frontend is built with React and styled with Tailwind CSS.

## 📌 Features

- Real estate property listings
- MongoDB integration via Mongoose
- Environment-based configuration using `dotenv`
- Type-safe backend logic with TypeScript
- Responsive frontend using React + Tailwind
- Backend logic and routes separated for clean architecture

---

## ⚙️ Tech Stack

- **Frontend**: React (`.tsx`)
- **Backend**: Node.js + TypeScript
- **Database**: MongoDB (Atlas)
- **ORM**: Mongoose
- **Routing**: Express or Next.js API routes (depending on project expansion)
- **Environment Management**: `dotenv`
- **Version Control**: Git + GitHub

---

## 🧠 Recent Challenges Faced

### 1. **MongoDB Connection Issues**
- Encountered and resolved `bad auth: Authentication failed` errors due to incorrect URI setup.
- Learned to create a reusable connection file (`src/lib/mongo.ts`) using `MongoClient`.

### 2. **TypeScript Compilation**
- Faced `TS1208` errors because `db.ts` lacked `export {}` to make it a module.
- Resolved by following module system best practices.

### 3. **`dotenv` Integration**
- Implemented `.env` to securely manage the MongoDB connection string.
- Learned the importance of not storing sensitive data in `src/`.

### 4. **Git & GitHub Sync Issues**
- Faced rejected `git push` errors due to unsynced changes on GitHub.
- Learned to use `git pull --rebase origin main` to reconcile local and remote work.

### 5. **Image Storage Strategy**
- Opted to store image URLs in MongoDB instead of storing image binaries.
- Allows frontend to display images via hosted links.

---
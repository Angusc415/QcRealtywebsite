# QC Realty Website

A modern, full-stack commercial real estate web application built with **TypeScript**, **React**, **Express**, and **MongoDB**.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Setup & Installation](#setup--installation)
- [Running the App](#running-the-app)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Development Notes](#development-notes)
- [Common Problems & Solutions](#common-problems--solutions)
- [License](#license)

---

## Project Structure

```
qcrealty/
  backend/         # Express + MongoDB API
    src/
      Apps.ts      # Express entry point
      db.js        # MongoDB connection (legacy)
      lib/
        mongo.ts   # Mongoose connection logic
      models/
        Property.ts# Mongoose property model
      routes/
        properties.ts # Property CRUD API
    package.json
    tsconfig.json
    ...
  frontend/        # React app
    src/
      App.tsx
      admin.tsx
      buying.tsx
      HomePage.tsx
      Aboutus.tsx
      ...         # Components, CSS, images, etc.
    public/
      index.html
      favicon.ico
      ...
    package.json
    tsconfig.json
    ...
  README.md
  .gitignore
```

---

## Features

- **Frontend:**  
  - Built with React + TypeScript
  - Admin panel for property management (add, edit, delete, view)
  - Property listing and details
  - Responsive design

- **Backend:**  
  - Express REST API
  - MongoDB/Mongoose integration
  - Modular route and model structure
  - CORS enabled for frontend-backend communication

---

## Setup & Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd qcrealty
```

### 2. Install dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd ../frontend
npm install
```

---

## Running the App

### 1. Start the backend server

```bash
cd backend
npm start
```
- The backend will run on [http://localhost:3001](http://localhost:3001) by default.

### 2. Start the frontend React app

```bash
cd frontend
npm start
```
- The frontend will run on [http://localhost:3000](http://localhost:3000) by default.

---

## Environment Variables

Create a `.env` file in the `backend/` directory with the following:

```
MONGODB_URI=your_mongodb_connection_string
PORT=3001
```

---

## API Endpoints

- **GET /api/properties** — List all properties
- **POST /api/properties** — Add a new property
- **GET /api/properties/:id** — Get a property by ID
- **PUT /api/properties/:id** — Update a property by ID
- **DELETE /api/properties/:id** — Delete a property by ID

Test endpoint:  
- **GET /test** — Returns `{ message: 'Server is working!' }`

---

## Development Notes

- **CORS** is enabled in the backend to allow requests from the React frontend.
- The backend only starts after a successful MongoDB connection.
- All TypeScript configuration files (`tsconfig.json`) are split between frontend and backend for best practices.
- The backend model files use `.ts` (not `.tsx`).

---

## Common Problems & Solutions

### 1. TypeScript/Node Import Errors
- **Problem:** `Module '../models/Property' was resolved to ...Property.tsx, but '--jsx' is not set.`
- **Solution:** Rename backend model files from `.tsx` to `.ts`.

### 2. Cannot Find Module 'cors'
- **Problem:** `Cannot find module 'cors' or its corresponding type declarations.`
- **Solution:** Run `npm install cors` and `npm install --save-dev @types/cors` in the backend directory.

### 3. Failed to Fetch (Frontend-Backend Communication)
- **Problem:** React app cannot connect to backend API (`Failed to fetch`).
- **Solution:**
  - Ensure the backend server is running (`npm start` in backend).
  - Check that API URLs in the frontend point to the correct backend port (e.g., `http://localhost:3001`).
  - Make sure CORS is enabled in the backend.

### 4. npm install Errors (ENOENT, EJSONPARSE)
- **Problem:** `npm install` fails due to missing or invalid `package.json`.
- **Solution:**
  - Ensure each of `frontend/` and `backend/` has its own valid `package.json`.
  - Delete any obsolete root-level `package.json` and `package-lock.json` after splitting.

### 5. TypeScript Implicit 'any' Errors
- **Problem:** `TS7006: Parameter 'url' implicitly has an 'any' type.`
- **Solution:** Add explicit types to all function parameters in arrow functions (e.g., `(url: string, idx: number) => ...`).

### 6. Express Server Not Starting
- **Problem:** Server starts before MongoDB connection is established.
- **Solution:** Move `app.listen` inside the `.then()` callback of your DB connection promise.

---

## License

MIT

---

**If you have any issues or questions, please open an issue or contact the maintainer.**

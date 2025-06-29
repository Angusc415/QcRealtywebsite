QC Realty Website
A modern real estate web app built with TypeScript, React, Express, and MongoDB.



🚀 What’s New

Backend/API
Express API Server:
Modular Express server (src/Apps.ts) with JSON body parsing.
/api/properties route for property CRUD (currently GET all and POST new).
Error handling added to API routes.
MongoDB Integration:
Centralized connection logic in src/lib/mongo.ts using Mongoose.
Uses environment variables for secure connection (.env with MONGODB_URI).
Connection caching for serverless/development efficiency.

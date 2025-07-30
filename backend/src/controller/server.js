import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { createNote, deleteNote, getAllNotes, updateNote } from "./notesController.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "../middleware/ratelimiter.js";
import dotenv from 'dotenv';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 8000;

// Middleware to parse JSON
app.use(express.json());

// Apply rate limiting to all routes
app.use(rateLimiter);

app.use((req, res, next) => {
  console.log(`Req method is ${req.method} request for ${req.url}`);
  next();
});

app.use('/api/notes', notesRoutes);

// Connect to MongoDB and start server
connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
});
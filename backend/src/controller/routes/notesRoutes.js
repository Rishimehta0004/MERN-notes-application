import express from "express";

import { createNote, deleteNote, getAllNotes, updateNote, getNoteById } from "../notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id",getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;

//mongodb+srv://22bce184:YCnqPTLSWykWipiw@cluster0.geutrfz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
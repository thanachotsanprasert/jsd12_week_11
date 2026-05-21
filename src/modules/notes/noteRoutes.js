import express from "express";
import {
    getNotes,
    createNote,
    getNoteById,
    updateNote,
    deleteNote,
} from "./noteController.js";

const router = express.Router();

router.route("/").get(getNotes).post(createNote);
router.route("/:id").get(getNoteById).put(updateNote).delete(deleteNote);

export default router;

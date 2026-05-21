import Note from "./noteModel.js";
import asyncHandler from "../../middleware/asyncHandler.js";

// @desc    Get all notes
// @route   GET /api/notes
export const getNotes = asyncHandler(async (req, res) => {
    const notes = await Note.find({}).populate("user", "username email");
    res.json(notes);
});

// @desc    Create a note
// @route   POST /api/notes
export const createNote = asyncHandler(async (req, res) => {
    const { title, content, userId } = req.body;

    const note = new Note({
        title,
        content,
        user: userId,
    });

    const createdNote = await note.save();
    res.status(201).json(createdNote);
});

// @desc    Get note by ID
// @route   GET /api/notes/:id
export const getNoteById = asyncHandler(async (req, res) => {
    const note = await Note.findById(req.params.id).populate("user", "username email");

    if (note) {
        res.json(note);
    } else {
        res.status(404);
        throw new Error("Note not found");
    }
});

// @desc    Update a note
// @route   PUT /api/notes/:id
export const updateNote = asyncHandler(async (req, res) => {
    const { title, content } = req.body;

    const note = await Note.findById(req.params.id);

    if (note) {
        note.title = title || note.title;
        note.content = content || note.content;

        const updatedNote = await note.save();
        res.json(updatedNote);
    } else {
        res.status(404);
        throw new Error("Note not found");
    }
});

// @desc    Delete a note
// @route   DELETE /api/notes/:id
export const deleteNote = asyncHandler(async (req, res) => {
    const note = await Note.findById(req.params.id);

    if (note) {
        await note.deleteOne();
        res.json({ message: "Note removed" });
    } else {
        res.status(404);
        throw new Error("Note not found");
    }
});

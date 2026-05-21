import User from "./userModel.js";
import asyncHandler from "../../middleware/asyncHandler.js";

// @desc    Get all users
// @route   GET /api/users
export const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.json(users);
});

// @desc    Create a user
// @route   POST /api/users
export const createUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        username,
        email,
        password,
    });

    res.status(201).json(user);
});

// @desc    Update a user
// @route   PUT /api/users/:id
export const updateUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    const user = await User.findById(req.params.id);

    if (user) {
        user.username = username || user.username;
        user.email = email || user.email;
        if (password) {
            user.password = password;
        }

        const updatedUser = await user.save();
        res.json(updatedUser);
    } else {
        res.status(404);
        throw new Error("User not found");
    }
});

// @desc    Delete a user
// @route   DELETE /api/users/:id
export const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
        await user.deleteOne();
        res.json({ message: "User removed" });
    } else {
        res.status(404);
        throw new Error("User not found");
    }
});

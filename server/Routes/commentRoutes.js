import express from "express";
import mongoose from "mongoose";
import Comment from "../Models/commentSchema.js";

const router = express.Router();

// Create Comment
router.post("/create", async (req, res) => {
    try {
        console.log("Request Body:", req.body);

        const {
            ticketId,
            userId,
            likes,
            content,
            legacy,
            age,
        } = req.body;

        if (!ticketId || !userId || !content) {
            return res.status(400).json({
                success: false,
                message: "ticketId, userId and content are required",
            });
        }

        const comment = await Comment.create({
            ticketId,
            userId,
            likes,
            content,
            legacy,
            age,
        });

        return res.status(201).json({
            success: true,
            message: "Comment created successfully",
            data: comment,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

// Get Comments by Ticket ID
router.get("/ticket", async (req, res) => {
    try {
        const { ticketId } = req.query;

        if (!ticketId) {
            return res.status(400).json({
                success: false,
                message: "ticketId is required",
            });
        }

        const comments = await Comment.find({ ticketId })
            .populate("userId")
            .populate("ticketId");

        return res.status(200).json({
            success: true,
            count: comments.length,
            data: comments,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

// Get Comments by User ID
router.get("/user", async (req, res) => {
    try {
        const { userId } = req.query;

        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "userId is required",
            });
        }

        const comments = await Comment.find({ userId })
            .populate("userId")
            .populate("ticketId");

        return res.status(200).json({
            success: true,
            count: comments.length,
            data: comments,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

// Get All Comments
router.get("/all", async (req, res) => {
    try {
        const comments = await Comment.find()
            .populate("userId")
            .populate("ticketId");

        return res.status(200).json({
            success: true,
            count: comments.length,
            data: comments,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

export default router;
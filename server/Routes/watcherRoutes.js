import express from "express";
import mongoose from "mongoose";
import Watcher from "../Models/watcherSchema.js";

const router = express.Router();

const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

// Add Watcher
router.post("/create", async (req, res) => {
  try {
    const { name, mobile, userId, ticketId } = req.body;

    if (!name || !mobile || !userId || !ticketId) {
      return res.status(400).json({
        success: false,
        message: "name, mobile, userId and ticketId are required",
      });
    }

    if (!isValidObjectId(userId) || !isValidObjectId(ticketId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid userId or ticketId",
      });
    }

    const existingWatcher = await Watcher.findOne({ userId, ticketId });

    if (existingWatcher) {
      return res.status(400).json({
        success: false,
        message: "Watcher already exists for this ticket",
      });
    }

    const watcher = await Watcher.create({
      name,
      mobile,
      userId,
      ticketId,
    });

    return res.status(201).json({
      success: true,
      message: "Watcher added successfully",
      data: watcher,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error adding watcher",
      error: error.message,
    });
  }
});

// Get all Watchers of a Ticket
router.get("/byticket", async (req, res) => {
  try {
    const { ticketId } = req.query;

    if (!ticketId) {
      return res.status(400).json({
        success: false,
        message: "ticketId is required",
      });
    }

    if (!isValidObjectId(ticketId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ticketId",
      });
    }

    const watchers = await Watcher.find({ ticketId })
      .populate("userId")
      .populate("ticketId");

    return res.status(200).json({
      success: true,
      count: watchers.length,
      data: watchers,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching watchers",
      error: error.message,
    });
  }
});

// Get all Tickets watched by a User
router.get("/byuser", async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "userId is required",
      });
    }

    if (!isValidObjectId(userId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid userId",
      });
    }

    const tickets = await Watcher.find({ userId })
      .populate("userId")
      .populate("ticketId");

    return res.status(200).json({
      success: true,
      count: tickets.length,
      data: tickets,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching watched tickets",
      error: error.message,
    });
  }
});

// Get all Watchers
//this end point is for testing purpose only, not to be used in productions
router.get("/all", async (req, res) => {
  try {
    const watchers = await Watcher.find()
      .populate("userId")
      .populate("ticketId");

    return res.status(200).json({
      success: true,
      message: "All watchers fetched successfully",
      count: watchers.length,
      data: watchers,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching watchers",
      error: error.message,
    });
  }
});


export default router;
import express from "express";
import mongoose from "mongoose";
import Ticket from "../Models/ticketSchema.js";

const router = express.Router();

const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

// Create Ticket
router.post("/create", async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const {
      ticketId,
      description,
      status,
      priority,
      type,
      createdBy,
      assignedTo,
    } = req.body;

    if (!ticketId || !description || !createdBy) {
      return res.status(400).json({
        success: false,
        message: "ticketId, description and createdBy are required",
      });
    }

    const existingTicket = await Ticket.findOne({ ticketId });

    if (existingTicket) {
      return res.status(400).json({
        success: false,
        message: "Ticket ID already exists",
      });
    }

    const ticket = await Ticket.create({
      ticketId,
      description,
      status,
      priority,
      type,
      createdBy,
      assignedTo,
    });

    return res.status(201).json({
      success: true,
      message: "Ticket created successfully",
      data: ticket,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating ticket",
      error: error.message,
    });
  }
});

// Get Ticket by Ticket ID
router.get("/getticket", async (req, res) => {
  try {
    console.log("Request Query:", req.query);

    const { ticketId } = req.query;

    if (!ticketId) {
      return res.status(400).json({
        success: false,
        message: "Ticket ID is required",
      });
    }

    const ticket = await Ticket.findOne({ ticketId })
      .populate("createdBy")
      .populate("assignedTo");

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Ticket fetched successfully",
      data: ticket,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching ticket",
      error: error.message,
    });
  }
});

// Get Tickets by Status
router.get("/getstatus", async (req, res) => {
  try {
    const { status } = req.query;

    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Status is required",
      });
    }

    const tickets = await Ticket.find({ status })
      .populate("createdBy")
      .populate("assignedTo");

    return res.status(200).json({
      success: true,
      count: tickets.length,
      data: tickets,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching tickets",
      error: error.message,
    });
  }
});

// Get Tickets by Priority
router.get("/getpriority", async (req, res) => {
  try {
    const { priority } = req.query;

    if (!priority) {
      return res.status(400).json({
        success: false,
        message: "Priority is required",
      });
    }

    const tickets = await Ticket.find({ priority })
      .populate("createdBy")
      .populate("assignedTo");

    return res.status(200).json({
      success: true,
      count: tickets.length,
      data: tickets,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching tickets",
      error: error.message,
    });
  }
});

// Get Tickets by Type
router.get("/gettype", async (req, res) => {
  try {
    const { type } = req.query;

    if (!type) {
      return res.status(400).json({
        success: false,
        message: "Type is required",
      });
    }

    const tickets = await Ticket.find({ type })
      .populate("createdBy")
      .populate("assignedTo");

    return res.status(200).json({
      success: true,
      count: tickets.length,
      data: tickets,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching tickets",
      error: error.message,
    });
  }
});

// Get All Tickets
router.get("/all", async (req, res) => {
  try {
    const tickets = await Ticket.find()
      .populate("createdBy")
      .populate("assignedTo");

    return res.status(200).json({
      success: true,
      message: "All tickets fetched successfully",
      count: tickets.length,
      data: tickets,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching tickets",
      error: error.message,
    });
  }
});

export default router;
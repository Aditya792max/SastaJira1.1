import mongoose from "mongoose";

// ticketId
// uploadedBy
// fileName
// url
// size
// createdAt

const attachmentSchema = new mongoose.Schema(
    {
        ticketId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Ticket",
            required: true,
            default: null,
        },
        uploadedBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
            required: true,
            default: null,
        },
        fileName:{
            type: String,
            required: true,
            trim: true,
        },
        url:{
            type: String,
            required: true,
            trim: true,
        },
        size:{
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Attachment", attachmentSchema);
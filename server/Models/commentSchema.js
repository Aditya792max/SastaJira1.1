import mongoose from "mongoose";
const commentSchema = new mongoose.Schema(
    {
        ticketId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Ticket",
            required: true,
        },
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        likes: {
            type: Number,
            default: 0,
        },
        content: {
            type: String,
            required: true,
        },
        legacy:{
            type: Boolean,
            default: false,
        },
        age: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Comment", commentSchema);
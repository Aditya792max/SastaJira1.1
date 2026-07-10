import mongoose from "mongoose";

const watcherSchema = new mongoose.Schema(
    {

        name:{
            type: String,
            required: true,
            trim: true
        },
        mobile:{
            type: String,
            required: true,
            trim: true,
        },
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref: "User",
            required:true
        },
        ticketId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Ticket",
            required: true
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Watcher", watcherSchema);
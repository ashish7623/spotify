import mongoose from "mongoose";
import { type } from "os";

const messageSchema = new mongoose.Schema(
    {
        senderId: {type: String,required: true},// clerk user ID
        receivedId: { type: String,required: true},// clerk user ID
        content: { type: String,required: true},
    },
    {timestamps: true}
); // createdAt, updatedAt

export const Message = mongoose.model("Message",messageSchema);
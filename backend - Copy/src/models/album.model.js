import mongoose from "mongoose";
import { type } from "os";
import { title } from "process";

const albumSchema = new mongoose.Schema(
    {
        title:{type: String,required: true},
        artist:{type: String,required: true},
        imageUrl:{type: String,required: true},
        releaseYear:{type: Number,required: true},
        songs:[{ type: mongoose.Schema.Types.ObjectId,ref: "Song"}],    
    },
    {timestamps: true}
); // createdAt, updatedAt

export const Album = mongoose.model("Album",albumSchema);
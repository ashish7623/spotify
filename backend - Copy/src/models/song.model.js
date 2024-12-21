import { timeStamp } from "console";
import mongoose from "mongoose";
import { type } from "os";
import { title } from "process";

const songSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    imageUrl:{
        type:String,
        required: true
    },
    audioUrl:{
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    albumId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album',
        required: false
    }
},{timeStamps: true});

export const Song = mongoose.model('Song',songSchema);

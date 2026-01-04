import mongoose from "mongoose";
import Prompt from "../models/Prompt.js";

let isConnected = false;

async function connectDB() {
    if (isConnected) return;
    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
}

export default async function handler(req, res) {
    try {
        await connectDB();
        const { prompt, response } = req.body;

        await Prompt.create({ prompt, response });
        res.status(200).json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

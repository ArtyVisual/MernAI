import mongoose from "mongoose";
import Prompt from "../frontend/src/models/Prompt.js"; // or inline schema

let isConnected = false;

async function connectDB() {
    if (isConnected) return;
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
}

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    await connectDB();

    const { prompt, response } = req.body;
    await Prompt.create({ prompt, response });

    res.status(200).json({ success: true });
}

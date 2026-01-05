import mongoose from "mongoose";
import Prompt from "../models/Prompt.js";

/**
 * Global cached connection for serverless
 */
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(process.env.MONGO_URI, {
            bufferCommands: false,
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { prompt, response } = req.body;

        if (!prompt || !response) {
            return res.status(400).json({
                error: "Prompt and response are required",
            });
        }

        await connectDB();

        await Prompt.create({
            prompt,
            response,
            createdAt: new Date(),
        });

        return res.status(200).json({ success: true });
    } catch (err) {
        console.error("SAVE DB ERROR:", err);
        return res.status(500).json({ error: err.message });
    }
}

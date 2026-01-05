import mongoose from "mongoose";

const PromptSchema = new mongoose.Schema({
    prompt: String,
    response: String,
});

const Prompt =
    mongoose.models.Prompt || mongoose.model("Prompt", PromptSchema);

async function connectDB() {
    if (mongoose.connection.readyState === 1) return;

    await mongoose.connect(process.env.MONGO_URI);
}

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        await connectDB();

        const { prompt, response } = req.body;
        await Prompt.create({ prompt, response });

        res.status(200).json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "DB save failed" });
    }
}

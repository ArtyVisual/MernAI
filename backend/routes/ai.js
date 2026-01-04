import express from "express";
import axios from "axios";
import Prompt from "../models/Prompt.js";

const router = express.Router();

router.post("/ask-ai", async (req, res) => {
    const { prompt } = req.body;

    const aiRes = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
            model: "mistralai/mistral-7b-instruct:free",
            messages: [{ role: "user", content: prompt }]
        },
        {
            headers: {
                Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                "Content-Type": "application/json"
            }
        }
    );

    res.json({ answer: aiRes.data.choices[0].message.content });
});

router.post("/save", async (req, res) => {
    const { prompt, response } = req.body;
    await Prompt.create({ prompt, response });
    res.json({ success: true });
});

export default router;

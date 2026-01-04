import axios from "axios";

export default async function handler(req, res) {

    // ✅ Allow preflight
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { prompt } = req.body;

        const aiRes = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                model: "mistralai/mistral-7b-instruct:free",
                messages: [{ role: "user", content: prompt }],
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );

        res.status(200).json({
            answer: aiRes.data.choices[0].message.content,
        });
    } catch (error) {
        res.status(500).json({
            error: error.response?.data || error.message,
        });
    }
}

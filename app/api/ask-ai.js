export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: "Prompt missing" });
        }

        const response = await fetch(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: "mistralai/mistral-7b-instruct",
                    messages: [{ role: "user", content: prompt }]
                })
            }
        );

        const data = await response.json();

        const answer =
            data?.choices?.[0]?.message?.content;

        if (!answer) {
            console.error("BAD AI RESPONSE:", data);
            return res.status(500).json({ error: "Invalid AI response" });
        }

        return res.status(200).json({ answer });

    } catch (err) {
        console.error("ASK-AI ERROR:", err);
        return res.status(500).json({ error: err.message });
    }
}

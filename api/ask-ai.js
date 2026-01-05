export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ message: "Prompt required" });
        }

        // TEMP TEST RESPONSE
        return res.status(200).json({
            success: true,
            reply: "API is working"
        });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { prompt } = req.body;

    res.status(200).json({
        reply: `Capital of France is Paris`
    });
}

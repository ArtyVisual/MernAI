export default async function handler(req, res) {
    console.log("🔥 API HIT");
    console.log("METHOD:", req.method);
    console.log("HEADERS:", req.headers);
    console.log("BODY:", req.body);

    // Allow browser preflight
    if (req.method === "OPTIONS") {
        console.log("🟡 OPTIONS request");
        return res.status(200).end();
    }

    if (req.method !== "POST") {
        console.log("🔴 NOT POST");
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    console.log("✅ POST CONFIRMED");

    return res.status(200).json({
        message: "API WORKING",
        received: req.body,
    });
}

import axios from "axios";

const API_URL =
    process.env.NODE_ENV === "production"
        ? "https://mern-ai-zeta.vercel.app"
        : "http://localhost:5000";

export const askAI = async (prompt) => {
    const res = await fetch("/api/ask-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
    });

    if (!res.ok) {
        throw new Error("API failed");
    }

    return res.json();
};


export const savePrompt = (prompt, response) =>
    axios.post(`${API_URL}/api/save`, { prompt, response });

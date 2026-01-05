import axios from "axios";

const API_URL =
    process.env.NODE_ENV === "production"
        ? "https://mern-ai-zeta.vercel.app"
        : "http://localhost:5000";

export const askAI = async (data) => {
    const res = await fetch(`${API_URL}/api/ask-ai`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "API Error");
    }

    return res.json();
};

export const savePrompt = (prompt, response) =>
    axios.post(`${API_URL}/api/save`, { prompt, response });

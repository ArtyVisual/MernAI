import axios from "axios";

export const askAI = async (data) => {
    const res = await fetch("/api/ask-ai", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return res.json();
};

export const savePrompt = (prompt, response) =>
    axios.post("/api/savedb", { prompt, response });
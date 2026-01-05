import axios from "axios";

export const askAI = (prompt) =>
    axios.post("/api/ask-ai", { prompt });

export const savePrompt = (prompt, response) =>
    axios.post("/api/save", { prompt, response });
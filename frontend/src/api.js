import axios from "axios";

export const askAI = (prompt) =>
    axios.post("/api/ai", { prompt });

export const savePrompt = (prompt, response) =>
    axios.post("/api/savedb", { prompt, response });

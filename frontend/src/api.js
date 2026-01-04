import axios from "axios";

export const askAI = (prompt) =>
    axios.post("http://localhost:5000/api/ask-ai", { prompt });

export const savePrompt = (prompt, response) =>
    axios.post("http://localhost:5000/api/save", { prompt, response });

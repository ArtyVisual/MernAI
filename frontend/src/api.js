import axios from "axios";

const API_URL =
    process.env.NODE_ENV === "production"
        ? "https://mern-ai-zeta.vercel.app"
        : "http://localhost:5000";

export const askAI = (prompt) => {
    return axios.post(`${API_URL}/api/ask-ai`, { prompt }); // <- return the promise
};

export const savePrompt = (prompt, response) =>
    axios.post(`${API_URL}/api/save`, { prompt, response });

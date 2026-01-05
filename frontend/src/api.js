import axios from "axios";

export const askAI = (prompt) => {
    return axios.post("/api/ask-ai", { prompt });
};

export const savePrompt = (prompt, response) => {
    return axios.post("/api/save", { prompt, response });
};

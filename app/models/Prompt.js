import mongoose from "mongoose";

const PromptSchema = new mongoose.Schema({
    prompt: String,
    response: String,
    createdAt: Date,
});

export default mongoose.models.Prompt ||
    mongoose.model("Prompt", PromptSchema);

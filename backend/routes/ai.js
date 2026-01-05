import express from "express";
const router = express.Router();

router.post("/ask-ai", async (req, res) => {
    console.log("API HIT", req.body);

    res.json({
        answer: "API WORKING"
    });
});

export default router;

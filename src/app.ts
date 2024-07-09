import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Welcoem to blog");
});

export default app;

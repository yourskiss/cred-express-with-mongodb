import express from "express";
const app = express();

import { PORT } from "./env.js";

app.get("/",(req, res) => {
    res.send("<h1>Hi Express</h1>");
});

app.get("/about",(req, res) => {
    res.send("<h1>Hi About</h1>");
});

app.listen(PORT, () => {
    console.log(`Server is running at Ports ${PORT}`)
});
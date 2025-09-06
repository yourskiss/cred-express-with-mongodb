import { Router } from "express";
const routes = Router();

routes.get("/blogs",(req, res) => {
    res.send("<h1>blog page by router</h1>");
});

routes.get("/blogs-list",(req, res) => {
    res.send("<h1>blog list  page  </h1>");
});


export const blogsRoute = routes;
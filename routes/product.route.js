import { Router } from "express";
const routes = Router();

routes.get("/products",(req, res) => {
    res.send("<h1>products page by router</h1>");
});

routes.get("/products-list",(req, res) => {
    res.send("<h1>products list page </h1>");
});



export const procutsRoute = routes;
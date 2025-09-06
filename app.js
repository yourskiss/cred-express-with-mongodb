import express from "express";
import path from "path";
import { PORT } from "./env.js";
const app = express();

import { procutsRoute } from "./routes/product.route.js";
import { blogsRoute } from "./routes/blog.route.js";

   // console.log("File name: ", import.meta.filename);
   // console.log("Directory name: ", import.meta.dirname);
   // console.log("URL name: ", import.meta.url);

const publicpath = path.join(import.meta.dirname, "public"); // public path
app.use(express.static(publicpath)) 

app.use(express.urlencoded({ extended:true })); //   form data by request body
app.set("view engine", "ejs"); // template engine


// normal
app.get("/",(req, res) => {
    res.send(`<h1>Welcome to Expressjs</h1>`);
});

// html file show 
app.get("/about",(req, res) => {
    const aboutuspage = path.join(publicpath, "aboutus.html")
    res.sendFile(aboutuspage);
});

// single params ====>> /product/productid
app.get("/product/:id",(req, res) => { 
    res.send(`<h1>Product ID: ${req.params.id}</h1>`);
});

// multiple params ====>> /service/serviceid/slug
app.get("/service/:id/:slug",(req, res) => { 
    const formatedSlug = req.params.slug.replace(/-/g, " ");
    res.send(`<h1>Service ID: ${req.params.id}</h1> <h1>Service Name: ${formatedSlug}</h1>`);
});

// query string ====>> /user?userid=1&username=ram
app.get("/user",(req, res) => { 
    console.log(req.query)
    res.send(`<h1>User ID: ${req.query.userid}</h1> <h1>User Name: ${req.query.username}</h1>`);
});

// Handle Form Submission
app.post("/contact",(req, res) => {
     console.log(req.body);
    // res.send(`Form data :  ${req}`);
     res.redirect("/thankyou.html")
   
});

// show page by routers
app.use(procutsRoute); //router ===>>  /products
app.use(blogsRoute); //router ===>>  /blogs


// ejs use = show ejs files
app.get("/team",(req, res) => {
    const teamdata = [
        {
            name:'Ram',
            age:'26',
            post:'SDE Frontend'
        },
        {
            name:'Syam',
            age:'34',
            post:'SDE Backend'
        },
        {
            name:'Raj',
            age:'36',
            post:'SEO'
        }
    ]
   return res.render('team', { teamdata });
});



// 404
app.use((req,res)=> {
  //  return res.status(404).send("<h1>404</h1><h2>Page not found</h2>") 
  const pagenotfound = path.join(publicpath, "404.html")
  return res.status(404).sendFile(pagenotfound);  
})

   
 


app.listen(PORT, () => {
    console.log(`Server is running at Ports ${PORT}`)
});
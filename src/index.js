import dotenv from "dotenv";
import { DATABASE } from "../DB/DataBase.js";

dotenv.config({
    path:".env",
})

import express, { urlencoded } from "express";

import { webRoute } from "../router/web.route.js";
       

const app = express();


app.set("view engine","ejs");


app.use(urlencoded({extended:false}))


app.use(webRoute)

DATABASE()

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server is on`);
    
})

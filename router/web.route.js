import { Router } from "express";
import { RDG } from "../controller/RPG.controller.js";
import { reg } from "../controller/reg.controller.js";
import { login } from "../controller/login.contoller.js";
import { userInfo } from "../controller/uAdmin.controller.js";

const webRoute = Router()

webRoute.get("/",(req,res)=>{

    res.render("reg")

})
webRoute.get("/login",(req,res)=>{

    res.render("login")

})
webRoute.post("/register",reg)

webRoute.post("/loginto",login)

webRoute.get("/random",RDG)

webRoute.get("/uAdmin",userInfo)

export {webRoute}
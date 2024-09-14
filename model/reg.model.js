import { Schema , model } from "mongoose";

const userSchema = new Schema({
    userName:{
        type:"String"
    },
    email:{
        type:"String"
    },
    password:{
        type:"String"
    },
},{timeseries:true})

const user = model("user",userSchema)

export {user}
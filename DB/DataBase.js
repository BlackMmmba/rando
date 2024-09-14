import { connect } from "mongoose";

const DATABASE=()=>{ 

connect(`${process.env.DATABASECONNECT}${process.env.DATABASE}`)

.then(()=>{
    console.log(`database is connected`);
    })

.catch((e)=>{
    console.log(e.message);
})}

export{DATABASE}
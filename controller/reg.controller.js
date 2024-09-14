import { user } from "../model/reg.model.js";

const reg =async (req,res)=>{
        try{
        const {userName,email,password} = req.body 

          const userDataBaseInfo = await user.findOne({email:email})
        
          if (!userDataBaseInfo) {
               await user.create({
                 userName:userName,
                 email:email,
                 password:password
             })    
                
                res.redirect("/random")
           }else{

                res.redirect("/login")
           
            }}catch(e){
               
                res.json(e)
           
            }
        
    }
   


export {reg}
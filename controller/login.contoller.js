import { user } from "../model/reg.model.js";

const login = async(req,res) => {
 
    const {email,password} = req.body 
    
    const users = await user.findOne({email:email},{
        email:1,
        password:1
    }) 
    
    if (users) {
       
        if (users.password===password){

            res.redirect("/random")

        }else{
            res.json({error:"password is not correct"})
        }
    
    }else{
        res.redirect("/reg")
    }
    
}

export {login}
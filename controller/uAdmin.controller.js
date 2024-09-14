import { user } from "../model/reg.model.js"; 


const userInfo = async (req,res)=>{
        
    const userinfom = await user.find({},{userName:1,email:1,password:1});

    res.render("admin",{user:userinfom})
}

export{userInfo}
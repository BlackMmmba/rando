import request from "request";

const RDG =(req,res)=>{
    const url = "https://randomuser.me/api/"

    request({url:url},(error,respo)=>{
        if (!error) {
            const result = respo.body;
            res.render("random",{random:JSON.parse(result)})         
        }
    })

}

export{RDG}
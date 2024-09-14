import jwt from "jsonwebtoken"

const jwtSign = (req)=>{

    return jwt.sign(req,"hefrjjffjjn4444gvbrf12b") 

}

const jwtVeri = (req)=>{
    return jwt.verify(req,"hefrjjffjjn4444gvbrf12b")
}

export {jwtSign,jwtVeri}
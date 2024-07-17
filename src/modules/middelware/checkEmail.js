
import bcrypt from "bcrypt"
import { User } from "../../../database/models/user.model.js"


export const checkEmail =  async (req , res , next)=>{

let found = await User.findOne({email: req.body.email})
if(found) return res.status(409).json({massage: "email already exists "})
    req.body.password = bcrypt.hashSync(req.body.password , 8)

next()
}
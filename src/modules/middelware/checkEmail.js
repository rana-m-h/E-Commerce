
import { User } from "../../../database/models/user.model.js"
import { AppError } from "../../utilts/appError.js"


export const checkEmail =  async (req , res , next)=>{

let found = await User.findOne({email: req.body.email})
if(found) return next(AppError("email already exists" , 409))
    next()
}



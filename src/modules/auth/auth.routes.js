

import { Router } from "express";
import { changePassword, singin, singup } from "./auth.controller.js";
import { checkEmail } from "../middelware/checkEmail.js";
import { validate } from "../middelware/validate.js";
import { singInVal, singUpVal } from "./auth.vaildation.js";


const authRouter = Router()


authRouter.post('/singup', validate(singUpVal), checkEmail, singup)
authRouter.post('/singin', validate(singInVal), singin)
authRouter.patch('/changePassword', changePassword)


export default authRouter
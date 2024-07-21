

import { Router } from "express";
import { addUser, deleteUser, getAllUser, getUser, updateUser } from "./user.Controller.js";
import { checkEmail } from "../middelware/checkEmail.js";

const userRouter = Router()

userRouter
.route('/')
.post( checkEmail , addUser)
.get(getAllUser)

userRouter
.route('/:id')
.get(getUser)
.put(updateUser)
.delete(deleteUser)


export default userRouter
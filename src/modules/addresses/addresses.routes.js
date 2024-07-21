


import { Router } from "express";
import { allowedto, protectedRoutes } from "../auth/auth.controller.js";
import { addAddress, getLoggedUserAddress, removeAddress } from "./addresses.Controller.js";



const addressRouter = Router()
addressRouter
.route('/')
.patch(protectedRoutes , allowedto('user') , addAddress )
.get(protectedRoutes , allowedto('user') , getLoggedUserAddress)

addressRouter
.route('/:id')
.delete(protectedRoutes , allowedto('admin' , 'user') , removeAddress )


export default addressRouter
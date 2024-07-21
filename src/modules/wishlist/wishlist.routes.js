


import { Router } from "express";
import { allowedto, protectedRoutes } from "../auth/auth.controller.js";
import { addToWishlist, getLoggedUserWishlist, removeFromWishlist } from "./wishlist.Controller.js";

const wishlistRouter = Router()

wishlistRouter
.route('/')
.patch(protectedRoutes , allowedto('user') , addToWishlist )
.get(protectedRoutes , allowedto('user') , getLoggedUserWishlist)

wishlistRouter
.route('/:id')
.delete(protectedRoutes , allowedto('admin' , 'user') , removeFromWishlist )


export default wishlistRouter
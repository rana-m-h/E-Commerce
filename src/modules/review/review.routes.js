

import { Router } from "express";
import { allowedto, protectedRoutes } from "../auth/auth.controller.js";
import { addReview, deleteReview, getAllReview, getReview, updateReview } from "./review.Controller.js";


const reviewRouter = Router()

reviewRouter
.route('/')
.post(protectedRoutes , allowedto('user') , addReview)
.get(getAllReview)

reviewRouter
.route('/:id')
.get(getReview)
.put(protectedRoutes , allowedto('user') , updateReview)
.delete(protectedRoutes , allowedto('user' , 'admin') , deleteReview)


export default reviewRouter
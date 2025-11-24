

import { Router } from "express";
import { addSubCategory, allSubCategory, deleteSubCategory, getSubCategory, updateSubCategory } from "./subcategory.Controller.js";
import { protectedRoutes, allowedto } from "../auth/auth.controller.js";


const subcategoryRouter = Router({ mergeParams: true })

subcategoryRouter
    .route('/')
    .post(protectedRoutes, allowedto('admin'), addSubCategory)
    .get(allSubCategory)

subcategoryRouter
    .route('/:id')
    .get(getSubCategory)
    .put(protectedRoutes, allowedto('admin'), updateSubCategory)
    .delete(protectedRoutes, allowedto('admin'), deleteSubCategory)


export default subcategoryRouter
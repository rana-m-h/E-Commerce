

import { Router } from "express";
import { addCategory, allCategory, deleteCategory, getCategory, updateCategory } from "./category.Controller.js";
import { uploadSingelFile } from "../../fileUploas/upload.js";
import { addCategoryVal } from "./category.vaildation.js";
import { validate } from "../middelware/validate.js";
import subcategoryRouter from "../subcategory/subcategory.routes.js";
import { protectedRoutes, allowedto } from "../auth/auth.controller.js";



const categoryRouter = Router()


categoryRouter.use('/:category/subCategories', subcategoryRouter)

categoryRouter
    .route('/')
    .post(protectedRoutes, allowedto('admin'), uploadSingelFile('image', 'categories'), validate(addCategoryVal), addCategory)
    .get(allCategory)

categoryRouter
    .route('/:id')
    .get(getCategory)
    .put(protectedRoutes, allowedto('admin'), uploadSingelFile('image', 'categories'), updateCategory)
    .delete(protectedRoutes, allowedto('admin'), deleteCategory)


export default categoryRouter
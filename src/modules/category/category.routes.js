

import { Router } from "express";
import { addCategory, allCategory, deleteCategory, getCategory, updateCategory } from "./category.Controller.js";
import { uploadSingelFile } from "../../fileUploas/upload.js";
import { addCategoryVal } from "./category.vaildation.js";
import { validate } from "../middelware/validate.js";
import subcategoryRouter from "../subcategory/subcategory.routes.js";



const categoryRouter = Router()


categoryRouter.use('/:categorie/subCategories' , subcategoryRouter)

categoryRouter
.route('/')
.post(uploadSingelFile('image' , 'categories' ),validate(addCategoryVal) , addCategory)
.get(allCategory)

categoryRouter
.route('/:id')
.get(getCategory)
.put(uploadSingelFile('image' , 'categories' ) , updateCategory)
.delete(deleteCategory)


export default categoryRouter
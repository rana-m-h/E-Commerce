

import { Router } from "express";
import { uploadSingleImage } from "../../fileUploas/upload.js";
import { validate } from "../middelware/validate.js";
import { protectedRoutes, allowedto } from "../auth/auth.controller.js";
import { addVegetable, allVegetable, deleteVegetable, getVegetable, updateVegetable } from "./vegetable.Controller.js";
import { addVegetableVal } from "./vegetable.vaildation.js";
import detailsvegetableRouter from "../detailsfvegetable/detailsvegetable.routes.js";



const vegetableRouter = Router()


vegetableRouter.use('/:vegetable/detailsvegetable', detailsvegetableRouter)

vegetableRouter
    .route('/')
    .post(protectedRoutes, allowedto('admin'), uploadSingleImage('image', 'vegetable'), validate(addVegetableVal), addVegetable)
    .get(allVegetable)

vegetableRouter
    .route('/:id')
    .get(getVegetable)
    .put(protectedRoutes, allowedto('admin'), uploadSingleImage('image', 'vegetable'), updateVegetable)
    .delete(protectedRoutes, allowedto('admin'), deleteVegetable)


export default vegetableRouter
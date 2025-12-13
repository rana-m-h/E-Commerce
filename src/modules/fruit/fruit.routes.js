

import { Router } from "express";
import { uploadSingleImage } from "../../fileUploas/upload.js";
import { validate } from "../middelware/validate.js";
import { protectedRoutes, allowedto } from "../auth/auth.controller.js";
import { addFruitVal } from "./fruit.vaildation.js";
import { addFruit, allFruit, deleteFruit, getFruit, updateFruit } from "./fruit.Controller.js";
import detailsfruitRouter from "../detailsfruit/detailsfruit.routes.js";



const fruitRouter = Router()


fruitRouter.use('/:fruit/detailsfruits', detailsfruitRouter)

fruitRouter
    .route('/')
    .post(protectedRoutes, allowedto('admin'), uploadSingleImage('image', 'fruit'), validate(addFruitVal), addFruit)
    .get(allFruit)

fruitRouter
    .route('/:id')
    .get(getFruit)
    .put(protectedRoutes, allowedto('admin'), uploadSingleImage('image', 'fruit'), updateFruit)
    .delete(protectedRoutes, allowedto('admin'), deleteFruit)


export default fruitRouter
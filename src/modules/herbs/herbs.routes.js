

import { Router } from "express";
import { uploadSingleImage } from "../../fileUploas/upload.js";
import { validate } from "../middelware/validate.js";
import { protectedRoutes, allowedto } from "../auth/auth.controller.js";
import detailsfruitRouter from "../detailsfruit/detailsfruit.routes.js";
import { addHerbs, deleteHerbs, getHerbs, updateHerbs } from "./herbs.Controller.js";
import { addHerbsVal } from "./herbs.vaildation.js";



const herbsRouter = Router()


herbsRouter.use('/:herbs/detailsfruits', detailsfruitRouter)

herbsRouter
    .route('/')
    .post(protectedRoutes, allowedto('admin'), uploadSingleImage('image', 'herbs'), validate(addHerbsVal), addHerbs)
    .get(allHerbs)

herbsRouter
    .route('/:id')
    .get(getHerbs)
    .put(protectedRoutes, allowedto('admin'), uploadSingleImage('image', 'herbs'), updateHerbs)
    .delete(protectedRoutes, allowedto('admin'), deleteHerbs)


export default herbsRouter
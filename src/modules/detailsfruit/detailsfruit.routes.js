

import { Router } from "express";
import { protectedRoutes, allowedto } from "../auth/auth.controller.js";
import { addDetailsFruit, allDetailsFruit, deleteDetailsFruit, getDetailsFruit, updateDetailsFruit } from "./detailsfruit.Controller.js";


const detailsfruitRouter = Router({ mergeParams: true })

detailsfruitRouter
    .route('/')
    .post(protectedRoutes, allowedto('admin'), addDetailsFruit)
    .get(allDetailsFruit)

detailsfruitRouter
    .route('/:id')
    .get(getDetailsFruit)
    .put(protectedRoutes, allowedto('admin'), updateDetailsFruit)
    .delete(protectedRoutes, allowedto('admin'), deleteDetailsFruit)


export default detailsfruitRouter
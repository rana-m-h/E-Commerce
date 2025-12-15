

import { Router } from "express";
import { protectedRoutes, allowedto } from "../auth/auth.controller.js";
import { addDetailsVegetable, allDetailsVegetable, getDetailsVegetable, updateDetailsVegetable } from "./detailsvegetableController.js";


const detailsvegetableRouter = Router({ mergeParams: true })

detailsvegetableRouter
    .route('/')
    .post(protectedRoutes, allowedto('admin'), addDetailsVegetable)
    .get(allDetailsVegetable)

detailsvegetableRouter
    .route('/:id')
    .get(getDetailsVegetable)
    .put(protectedRoutes, allowedto('admin'), updateDetailsVegetable)
    .delete(protectedRoutes, allowedto('admin'), detailsvegetableRouter)


export default detailsvegetableRouter


import { Router } from "express";
import { protectedRoutes, allowedto } from "../auth/auth.controller.js";
import { addDetailsHerbs, allDetailsHerbs, deleteDetailsHerbs, getDetailsHerbs, updateDetailsHerbs } from "./detailsherbs.Controller.js";


const detailsherbsRouter = Router({ mergeParams: true })

detailsherbsRouter
    .route('/')
    .post(protectedRoutes, allowedto('admin'), addDetailsHerbs)
    .get(allDetailsHerbs)

detailsherbsRouter
    .route('/:id')
    .get(getDetailsHerbs)
    .put(protectedRoutes, allowedto('admin'), updateDetailsHerbs)
    .delete(protectedRoutes, allowedto('admin'), deleteDetailsHerbs)


export default detailsherbsRouter
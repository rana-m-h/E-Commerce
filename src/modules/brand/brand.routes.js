

import { Router } from "express";
import { uploadSingelFile } from "../../fileUploas/upload.js";
import { addbrand, allbrands, deletebrand, getbrand, updatebrand } from "./brand.Controller.js";
import { protectedRoutes } from "../auth/auth.controller.js";

const brandRouter = Router()

brandRouter
.route('/')
.post(protectedRoutes , allowedto('admin') , uploadSingelFile('logo' , 'brands' ) ,addbrand)
.get(allbrands)

brandRouter
.route('/:id')
.get(getbrand)
.put(protectedRoutes , allowedto('admin') , uploadSingelFile('logo' , 'brands' ) ,updatebrand)
.delete(protectedRoutes , allowedto('admin') , deletebrand)


export default brandRouter
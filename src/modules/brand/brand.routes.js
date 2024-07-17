

import { Router } from "express";
import { uploadSingelFile } from "../../fileUploas/upload.js";
import { addbrand, allbrands, deletebrand, getbrand, updatebrand } from "./brand.Controller.js";

const brandRouter = Router()

brandRouter
.route('/')
.post(uploadSingelFile('logo' , 'brands' ) ,addbrand)
.get(allbrands)

brandRouter
.route('/:id')
.get(getbrand)
.put(uploadSingelFile('logo' , 'brands' ) ,updatebrand)
.delete(deletebrand)


export default brandRouter
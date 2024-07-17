

import { Router } from "express";
import { addbrand, allbrands, deletebrand, getbrand, updatebrand } from "./brand.Controller.js";
import { uploadMaxOFlFile } from "../../fileUploas/upload.js";

const brandRouter = Router()

brandRouter
.route('/')
.post(uploadMaxOFlFile([{name: 'imageCover' , maxCount: 1} , {name: 'images' , maxCount: 8}], 'products'),addbrand)
.get(allbrands)

brandRouter
.route('/:id')
.get(getbrand)
.put(uploadMaxOFlFile([{name: 'imageCover' , maxCount: 1} , {name: 'images' , maxCount: 8}], 'products'),updatebrand)
.delete(deletebrand)


export default brandRouter
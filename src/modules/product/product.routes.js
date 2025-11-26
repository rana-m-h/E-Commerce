

import { Router } from "express";
import { uploadMaxOFlFile } from "../../fileUploas/upload.js";
import { addproduct, allproducts, deleteproduct, getproduct, updateproduct } from "./product.Controller.js";
import { allowedto, protectedRoutes } from "../auth/auth.controller.js";

const ProductRouter = Router()

ProductRouter
    .route('/')
    .post(protectedRoutes, allowedto('admin'),
        uploadMaxOFlFile([{ name: 'imageCover', maxCount: 1 },
        { name: 'images', maxCount: 8 }], 'products'), addproduct)

    .get(allproducts)

ProductRouter
    .route('/:id')
    .get(getproduct)

    .put(protectedRoutes, allowedto('admin'),
        uploadMaxOFlFile([{ name: 'imageCover', maxCount: 1 },
        { name: 'images', maxCount: 8 }], 'products'), updateproduct)

    .delete(protectedRoutes, allowedto('admin'), deleteproduct)


export default ProductRouter
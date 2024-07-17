
import slugify from "slugify";
import { AppError } from "../../utilts/appError.js";
import { catchError } from "../middelware/catchError.js";
import { Product } from "../../../database/models/product.model.js";
import { deleteOne, getAll, getOne } from "../handlers/handlers.js";


const addproduct= catchError(async (req, res, next) => {
    req.body.slug = slugify(req.body.title)
    req.body.imageCover = req.files.imageCover[0].filename
    req.body.images = req.files.images.map(img=>img.filename)
    req.body.logo = req.file.filename
    let product= new Product(req.body)
    await product.save()
    res.json({ message: "success", product })

})


const updateproduct= catchError(async (req, res, next) => {
  if( req.body.slug) req.body.slug = slugify(req.body.name)
    if(req.file) req.body.logo = req.file.filename
    let product= await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    product|| next(new AppError('productnot found', 404))
    !product|| res.json({ message: "success", product })

})

const allproducts = getAll(Product)

const deleteproduct = deleteOne(Product)

const getproduct = getOne(Product)





export {
    addproduct,
    getproduct,
    allproducts,
    updateproduct,
    deleteproduct
  
}
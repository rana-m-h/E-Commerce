import { Category } from "../../../database/models/category.model.js"
import slugify from "slugify";
import { AppError } from "../../utilts/appError.js";
import { catchError } from "../middelware/catchError.js";
import { deleteOne, getAll, getOne} from "../handlers/handlers.js";

const addCategory = catchError(async (req , res , next)=>{
    req.body.slug = slugify(req.body.name)
    req.body.image = req.file.filename
     let category = new Category(req.body)
     await category.save()
    res.json({message: "success" , category})
    
    })


const updateCategory = catchError(async (req , res , next)=>{
    if( req.body.slug) req.body.slug = slugify(req.body.name)
     if(req.file) req.body.image = req.file.filename
    let category =  await Category.findByIdAndUpdate(req.params.id , req.body , {new: true})
    category || next(new AppError('category not found' , 404))
    !category || res.json({message: "success" , category})
    
    })



    const allCategory = getAll(Category)

    const deleteCategory = deleteOne(Category)
    
    const getCategory = getOne(Category)
    
    


export{
    addCategory,
    allCategory,
    getCategory,
    updateCategory,
    deleteCategory
}
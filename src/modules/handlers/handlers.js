
import slugify from "slugify"
import { ApiFeatures } from "../../utilts/apiFeatures.js"
import { catchError } from "../middelware/catchError.js"
import { AppError } from "../../utilts/appError.js"



export const deleteOne = (model)=>{
   return catchError(async (req , res , next)=>{
        let docoment =  await model.findByIdAndDelete(req.params.id)
        docoment || next(new AppError('docoment not found' , 404))
        !docoment || res.json({message: "success" , docoment})
        
        })
    
}


 export const getAll = (model)=>{

    return catchError(async (req, res, next) => {

        let apiFeatures = new ApiFeatures(model.find() , req.query)
        .pagination().fields().filter().search().sort()
        let docoment = await apiFeatures.mongooseQuery
         res.json({ message: "success" , page: apiFeatures.pageNumber , docoment })
    
    })
    
    
}

 export const addOne = (model)=>{
   return catchError(async (req , res , next)=>{
        req.body.slug = slugify(req.body.name)
         let docoment = new model(req.body)
         await docoment.save()
        res.json({message: "success" , docoment})
        
        })
     
    
}



 export const getOne = (model)=>{
  return  catchError(async (req, res, next) => {

        let docoment= await model.findById(req.params.id)
        docoment|| next(new AppError('docomentnot found', 404))
        !docoment|| res.json({ message: "success", docoment })
    
    })
    
}


 
 export const updateOne = (model)=>{
   return catchError(async (req , res , next)=>{
        req.body.slug = slugify(req.body.name)
        let docoment =  await model.findByIdAndUpdate(req.params.id , req.body , {new: true})
        docoment || next(new AppError('docoment not found' , 404))
        !docoment || res.json({message: "success" , docoment})
        
        })
    
 }






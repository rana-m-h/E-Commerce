import { AppError } from "../../utilts/appError.js"


export const validate = (schema)=>{
return (req , res , next)=>{
    let {error} = schema.validate({image: req.file,...req.body , ...req.params , ...req.query}, {abortEarly:false})
    if(!error){

        next()

    }
    else {
        let errMessage = error.details.map(err =>  err.message)
         next(new AppError(errMessage , 401))
    
    
     }
}
}
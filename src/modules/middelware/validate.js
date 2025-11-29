// import { AppError } from "../../utilts/appError.js"


// export const validate = (schema)=>{
// return (req , res , next)=>{

//     let {error} = schema.validate({image: req.file,...req.body , ...req.params , ...req.query}, {abortEarly:false})
//     if(!error){

//         next()

//     }
//     else {
//         let errMessage = error.details.map(err =>  err.message)
//          next(new AppError(errMessage , 401))


//      }
// }
// } 
import { AppError } from "../../utilts/appError.js";

export const validate = (schema) => {
    return (req, res, next) => {
        // نجمع البيانات من body, params, query
        const dataToValidate = { ...req.body, ...req.params, ...req.query };

        // نضيف image لو موجود
        if (req.file) {
            dataToValidate.image = req.file;
        }

        const { error } = schema.validate(dataToValidate, { abortEarly: false });

        if (!error) return next();

        // نجمع كل رسائل الأخطاء في array
        const errMessage = error.details.map(err => err.message);
        next(new AppError(errMessage, 401));
    };
};

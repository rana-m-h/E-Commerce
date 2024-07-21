
import { catchError } from "../middelware/catchError.js";
import { AppError } from "../../utilts/appError.js"
import { Review } from "../../../database/models/review.model.js";





 const addReview = catchError(async (req , res , next)=>{
       req.body.user = req.user._id
       let isExist = await Review.findOne({user: req.user._id , product: req.body.product})
       if(isExist) return next(new AppError('you created a review before' , 409))
          let review = new Review(req.body)
          await review.save()
         res.json({message: "success" , review})
         
         })
      
 
 const getAllReview = catchError(async (req, res, next) => {
         let review = await Review.find()
          res.json({ message: "success" ,  review })
     
     })
     
     
   const getReview  = catchError(async (req, res, next) => {
         let review= await Review.findById(req.params.id)
         review|| next(new AppError('review not found', 404))
         !review|| res.json({ message: "success", review })
     
     })
     

  const updateReview = catchError(async (req , res , next)=>{
         let review =  await Review.findOneAndUpdate({_id: req.params.id , user: req.user._id} , req.body , {new: true})
         review || next(new AppError('review not found or you are not created review ' , 404))
         !review || res.json({message: "success" , review})
         
         })
     
  const deleteReview = catchError(async (req , res , next)=>{
         let review =  await Review.findByIdAndDelete({_id: req.params.id , user: req.user._id} , req.body , {new: true})
         review || next(new AppError('review not found or you are not created review ' , 404))
         !review || res.json({message: "success" , review})
         
         })
     

 
 

 
 






export{
   addReview,
   getAllReview,
   getReview,
   updateReview,
   deleteReview

}
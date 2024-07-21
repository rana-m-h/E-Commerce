
import { User } from "../../../database/models/user.model.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { catchError } from "../middelware/catchError.js"
import { AppError } from "../../utilts/appError.js"




const singup = catchError(async (req , res , next)=>{
  let user = new User(req.body)
  await User.save()
  let token = jwt.sign({userId: user._id ,  role: user.role} , process.env.JWT_KEY)
 res.json({message: "success" , token})

})


  const singin = catchError(async (req , res , next)=>{
    let user = await User.findOne({email: req.body.email})
    if(user && bcrypt.compareSync(req.body.password , user.password)){
      let token = jwt.sign( {userId: user._id , role: user.role} ,process.env.JWT_KEY)
      return res.json({message: "success" , token})

    }
      next(new AppError('incorrect email or password' , 401))
  })

  
  const changePassword = catchError(async (req , res , next)=>{
    let user = await User.findOne({email: req.body.email})
    if(user && bcrypt.compareSync(req.body.password , user.password)){
      await User.findByIdAndUpdate({email: req.body.email} , {password: req.body.newPassword , passwordChangeAt: Date.now()})
      let token = jwt.sign( {userId: user._id , role: user.role} ,process.env.JWT_KEY)
      return res.json({message: "success" , token})

    }
      next(new AppError('incorrect email or password' , 401))
  })


  const protectedRoutes = catchError(async (req , res , next)=>{


    let{token} = req.headers
    let userPayload = null
    if(!token) return next(new AppError('token not provided' , 401))
      jwt.verify(token , process.env.JWT_KEY , (err , payload)=>{
        if(err) return next(new AppError(err , 401))
          userPayload = payload
    
      })


      let user = await User.findById(userPayload.userId)
      if(!user) return next(new AppError('user not found' , 401))
        if(user.passwordChangeAt){
          let time = parseInt(user.passwordChangeAt.getTime()/1000)
          if(time > userPayload.iat) return next(new AppError('invalid token ... login again' , 401))
        }

        req.user = user

        next()
  
  })


const allowedto = (... roles) => {
  return catchError(async (req  , res , next) =>{
    if(roles.includes(req.user.role))
      return next()
    return next(new AppError('you not authorized to access this endpoint' , 401))

  })
}





export {
    singup,
    singin,
    changePassword,
    protectedRoutes,
    allowedto
   }
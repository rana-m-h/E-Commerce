import jwt from "jsonwebtoken"


export const verifyToken = async (req , res , next) =>{

let { token } = req.headers

jwt.verify(token , 'Rana', async (err , decoded)=>{
if(err) next(new AppError('invalid token' , 401))

    req.user = decoded
    next()
    

})

}


import joi from 'joi'


const singUpVal = joi.object({


    name: joi.string().min(2).max(20).required(),
    email: joi.string().email().required(),
    password: joi.string().pattern(/^[A-Z][A-Za-z0-9]{8,40}$/).required(),
    rePassword: joi.valid(joi.ref('password')).required(),
    role: joi.string().required()
})



const singInVal = joi.object({
    email: joi.string().email().required(),
    password: joi.string().pattern(/^[A-Z][A-Za-z0-9]{8,40}$/).required(),
})



export {
    singInVal,
    singUpVal
}


import joi from 'joi'


const addVegetableVal = joi.object({

    name: joi.string().min(1).max(50).required(),
}).unknown(true)





export {
    addVegetableVal
}
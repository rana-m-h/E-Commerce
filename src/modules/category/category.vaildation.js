
import joi from 'joi'


const addCategoryVal = joi.object({

    name: joi.string().min(1).max(50).required(),

})





export {
    addCategoryVal
}

import joi from 'joi'


const addCategoryVal = joi.object({

    name: joi.string().min(1).max(50).required(),
    image: joi.string().uri() // <-- السماح بحقل الصورة كـ URL

})





export {
    addCategoryVal
}
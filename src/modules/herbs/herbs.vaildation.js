
import joi from 'joi'


const addHerbsVal = joi.object({

    name: joi.string().min(1).max(50).required(),
}).unknown(true) // <-- يسمح بأي حقول إضافية مثل image





export {
    addHerbsVal
}




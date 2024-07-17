

import { Brand } from "../../../database/models/brand.model.js";
import { addOne, deleteOne, getAll, getOne, updateOne} from "../handlers/handlers.js";


const addbrand = addOne(Brand)

const allbrands = getAll (Brand)

const deletebrand = deleteOne(Brand)    

const getbrand = getOne(Brand)

const updatebrand = updateOne(Brand)



export{
    addbrand,
    allbrands,
    getbrand,
    updatebrand,
    deletebrand
}
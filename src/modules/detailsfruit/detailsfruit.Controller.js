
import { catchError } from "../middelware/catchError.js";
import { addOne, deleteOne, getOne, updateOne } from "../handlers/handlers.js";
import { ApiFeatures } from "../../utilts/apiFeatures.js";
import { DetailsFruit } from "../../../database/models/detailsfruit.model.js";


const allDetailsFruit = catchError(async (req, res, next) => {

    let filterObj = {}

    if (req.params.fruit) filterObj.Fruit = req.params.fruit

    let apiFeatures = new ApiFeatures(DetailsFruit.find(filterObj), req.query)
        .pagination().fields().filter().search().sort()

    let detailsfruits = await apiFeatures.mongooseQuery
    res.json({ message: "success", page: apiFeatures.pageNumber, detailsfruits })

})

const addDetailsFruit = addOne(DetailsFruit)
const getDetailsFruit = getOne(DetailsFruit)
const deleteDetailsFruit = deleteOne(DetailsFruit)
const updateDetailsFruit = updateOne(DetailsFruit)





export {
    addDetailsFruit,
    getDetailsFruit,
    allDetailsFruit,
    updateDetailsFruit,
    deleteDetailsFruit

}
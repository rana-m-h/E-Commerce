
import { catchError } from "../middelware/catchError.js";
import { addOne, deleteOne, getOne, updateOne } from "../handlers/handlers.js";
import { ApiFeatures } from "../../utilts/apiFeatures.js";
import { DetailsVegetable } from "../../../database/models/detailsvegetable.model.js";


const allDetailsVegetable = catchError(async (req, res, next) => {

    let filterObj = {}

    if (req.params.vegetable) filterObj.Vegetable = req.params.vegetable

    let apiFeatures = new ApiFeatures(DetailsVegetable.find(filterObj).populate('Vegetable', 'name slug image'), req.query)
        .pagination().fields().filter().search().sort()

    let detailsvegetables = await apiFeatures.mongooseQuery
    res.json({ message: "success", page: apiFeatures.pageNumber, detailsvegetables })

})

const addDetailsVegetable = addOne(DetailsVegetable)
const getDetailsVegetable = getOne(DetailsVegetable)
const deleteDetailsVegetable = deleteOne(DetailsVegetable)
const updateDetailsVegetable = updateOne(DetailsVegetable)





export {
    addDetailsVegetable,
    getDetailsVegetable,
    allDetailsVegetable,
    updateDetailsVegetable,
    deleteDetailsVegetable

}
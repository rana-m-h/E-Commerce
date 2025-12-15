
import { catchError } from "../middelware/catchError.js";
import { addOne, deleteOne, getOne, updateOne } from "../handlers/handlers.js";
import { ApiFeatures } from "../../utilts/apiFeatures.js";
import { DetailsHerbs } from "../../../database/models/detailsherbs.model.js";


const allDetailsHerbs = catchError(async (req, res, next) => {

    let filterObj = {}

    if (req.params.herbs) filterObj.Herbs = req.params.herbs

    let apiFeatures = new ApiFeatures(DetailsHerbs.find(filterObj).populate('Herbs ', 'name slug image'), req.query)
        .pagination().fields().filter().search().sort()

    let detailsherbs = await apiFeatures.mongooseQuery
    res.json({ message: "success", page: apiFeatures.pageNumber, detailsherbs })

})

const addDetailsHerbs = addOne(DetailsHerbs)
const getDetailsHerbs = getOne(DetailsHerbs)
const deleteDetailsHerbs = deleteOne(DetailsHerbs)
const updateDetailsHerbs = updateOne(DetailsHerbs)





export {
    addDetailsHerbs,
    getDetailsHerbs,
    allDetailsHerbs,
    updateDetailsHerbs,
    deleteDetailsHerbs

}
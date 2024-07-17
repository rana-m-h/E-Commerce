
import { catchError } from "../middelware/catchError.js";
import { SubCategory } from "../../../database/models/subcategory.model.js";
import { addOne, deleteOne, getOne, updateOne } from "../handlers/handlers.js";
import { ApiFeatures } from "../../utilts/apiFeatures.js";


const allSubCategory = catchError( async (req , res , next)=>{

    let filterObj = {}

    if(req.params.category) filterObj.category = req.params.category

    let apiFeatures = new ApiFeatures(SubCategory.find(filterObj) , req.query)
    .pagination().fields().filter().search().sort()

    let subcategorys = await apiFeatures.mongooseQuery
     res.json({ message: "success" , page: apiFeatures.pageNumber , subcategorys })

   })

const addSubCategory = addOne(SubCategory)
const getSubCategory = getOne(SubCategory)
const deleteSubCategory = deleteOne(SubCategory)
const updateSubCategory = updateOne(SubCategory)





export{
    addSubCategory,
    getSubCategory,
    allSubCategory,
    updateSubCategory,
    deleteSubCategory

}
import { Category } from "../../../database/models/category.model.js";
import slugify from "slugify";
import { AppError } from "../../utilts/appError.js";
import { catchError } from "../middelware/catchError.js";
import { deleteOne, getAll, getOne } from "../handlers/handlers.js";

const addCategory = catchError(async (req, res, next) => {
    req.body.slug = slugify(req.body.name);
    console.log("REQ BODY:", req.body); // <-- هنا هتشوف image

    const category = new Category(req.body);
    await category.save();

    res.json({ message: "success", category });
});

const updateCategory = catchError(async (req, res, next) => {
    if (req.body.name) {
        req.body.slug = slugify(req.body.name);
    }

    const category = await Category.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    if (!category) return next(new AppError("category not found", 404));

    res.json({ message: "success", category });
});

export const allCategory = getAll(Category);
export const deleteCategory = deleteOne(Category);
export const getCategory = getOne(Category);

export { addCategory, updateCategory };

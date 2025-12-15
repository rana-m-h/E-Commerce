import slugify from "slugify";
import { AppError } from "../../utilts/appError.js";
import { catchError } from "../middelware/catchError.js";
import { deleteOne, getAll, getOne } from "../handlers/handlers.js";
import { Vegetable } from "../../../database/models/vegetable.model.js";

const addVegetable = catchError(async (req, res, next) => {
    req.body.slug = slugify(req.body.name);

    const vegetable = new Vegetable(req.body);
    await vegetable.save();

    res.json({ message: "success", vegetable });
});

const updateVegetable = catchError(async (req, res, next) => {
    if (req.body.name) {
        req.body.slug = slugify(req.body.name);
    }

    const vegetable = await Vegetable.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    if (!vegetable) return next(new AppError("vegetable not found", 404));

    res.json({ message: "success", vegetable });
});

export const allVegetable = getAll(Vegetable);
export const deleteVegetable = deleteOne(Vegetable);
export const getVegetable = getOne(Vegetable);

export { addVegetable, updateVegetable };

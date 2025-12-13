import slugify from "slugify";
import { AppError } from "../../utilts/appError.js";
import { catchError } from "../middelware/catchError.js";
import { deleteOne, getAll, getOne } from "../handlers/handlers.js";
import { Fruit } from "../../../database/models/fruit.model.js";

const addFruit = catchError(async (req, res, next) => {
    req.body.slug = slugify(req.body.name);

    const fruit = new Fruit(req.body);
    await fruit.save();

    res.json({ message: "success", fruit });
});

const updateFruit = catchError(async (req, res, next) => {
    if (req.body.name) {
        req.body.slug = slugify(req.body.name);
    }

    const fruit = await Fruit.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    if (!fruit) return next(new AppError("fruit not found", 404));

    res.json({ message: "success", fruit });
});

export const allFruit = getAll(Fruit);
export const deleteFruit = deleteOne(Fruit);
export const getFruit = getOne(Fruit);

export { addFruit, updateFruit };

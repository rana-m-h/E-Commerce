import slugify from "slugify";
import { AppError } from "../../utilts/appError.js";
import { catchError } from "../middelware/catchError.js";
import { deleteOne, getAll, getOne } from "../handlers/handlers.js";
import { Herbs } from "../../../database/models/herbs.model.js";

const addHerbs = catchError(async (req, res, next) => {
    req.body.slug = slugify(req.body.name);

    const herbs = new Herbs(req.body);
    await herbs.save();

    res.json({ message: "success", herbs });
});

const updateHerbs = catchError(async (req, res, next) => {
    if (req.body.name) {
        req.body.slug = slugify(req.body.name);
    }

    const herbs = await Herbs.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    if (!herbs) return next(new AppError("herbs not found", 404));

    res.json({ message: "success", herbs });
});

export const allHerbs = getAll(Herbs);
export const deleteHerbs = deleteOne(Herbs);
export const getHerbs = getOne(Herbs);

export { addHerbs, updateHerbs };

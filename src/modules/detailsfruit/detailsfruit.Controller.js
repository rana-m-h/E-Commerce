
import { catchError } from "../middelware/catchError.js";
import { deleteOne } from "../handlers/handlers.js";
import { DetailsFruit } from "../../../database/models/detailsfruit.model.js";
import { Fruit } from "../../../database/models/fruit.model.js";
import { AppError } from "../../utilts/appError.js";


const allDetailsFruit = catchError(async (req, res, next) => {

    const filter = {};
    const fruitId = req.params.fruit || req.query.fruitId;
    const fruitSlug = req.query.fruit;

    if (fruitId) filter.Fruit = fruitId;
    if (fruitSlug) {
        const fruit = await Fruit.findOne({ slug: fruitSlug }).select('_id');
        if (!fruit) return next(new AppError('fruit not found', 404));
        filter.Fruit = fruit._id;
    }

    const detailsfruits = await DetailsFruit.find(filter)
        .populate('Fruit', 'name slug image')
        .sort({ publishedDate: -1 });
    res.json({ message: "success", detailsfruits })

})

const addDetailsFruit = catchError(async (req, res, next) => {
    const details = new DetailsFruit({
        ...req.body,
        details: req.body.details ?? req.body.description ?? "",
        createdBy: req.user?._id,
    });
    await details.save();
    await details.populate('Fruit', 'name slug image');
    res.status(201).json({ message: 'success', detailsfruit: details });
});

const getDetailsFruit = catchError(async (req, res, next) => {
    const detailsfruit = await DetailsFruit.findById(req.params.id).populate('Fruit', 'name slug image');
    if (!detailsfruit) return next(new AppError('details not found', 404));
    res.json({ message: 'success', detailsfruit });
});
const deleteDetailsFruit = deleteOne(DetailsFruit)
const updateDetailsFruit = catchError(async (req, res, next) => {
    const update = { ...req.body };
    if (update.description !== undefined && update.details === undefined) {
        update.details = update.description;
    }

    const detailsfruit = await DetailsFruit.findByIdAndUpdate(req.params.id, update, { new: true, runValidators: true })
        .populate('Fruit', 'name slug image');
    if (!detailsfruit) return next(new AppError('details not found', 404));
    res.json({ message: 'success', detailsfruit });
});





export {
    addDetailsFruit,
    getDetailsFruit,
    allDetailsFruit,
    updateDetailsFruit,
    deleteDetailsFruit

}

import { AppError } from "../../utilts/appError.js";

export const validate = (schema) => {
    return (req, res, next) => {
        const dataToValidate = { ...req.body, ...req.params, ...req.query };

        if (req.file) {
            dataToValidate.image = req.file;
        }

        const { error } = schema.validate(dataToValidate, { abortEarly: false });

        if (!error) return next();

        const errMessage = error.details.map(err => err.message);
        next(new AppError(errMessage, 401));
    };
};

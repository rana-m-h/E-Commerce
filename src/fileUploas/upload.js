
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { AppError } from "../utilts/appError.js";
import dotenv from "dotenv";

dotenv.config();

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Multer Memory Storage
const storage = multer.memoryStorage();

function fileFilter(req, file, cb) {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("image only", 400), false);
  }
}
export const uploadMaxOFlFile = (arrayOfFields) =>
  upload.fields(arrayOfFields);


export const upload = multer({ storage, fileFilter });

// Middleware to process single image upload
export const uploadSingleImage = (fieldName, folderName) => {
  return async (req, res, next) => {

    upload.single(fieldName)(req, res, async (err) => {
      if (err) return next(err);
      console.log("REQ FILE:", req.file);

      if (!req.file) return next();

      const stream = cloudinary.uploader.upload_stream(
        { folder: folderName },
        (error, result) => {
          if (error) return next(error);
          req.body.image = result.secure_url;

          next();
        }
      );

      stream.end(req.file.buffer);
    });
  };
};

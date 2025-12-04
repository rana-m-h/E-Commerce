
// import multer from 'multer'
// import { v4 as uuidv4 } from 'uuid'
// import { AppError } from '../utilts/appError.js'



// export const fileUpolad = (folderName)=>{
//     const storage = multer.diskStorage({
//         destination:  (req, file, cb)=> {
//           cb(null, `uploads/${folderName}` )
//         },
//         filename:  (req, file, cb)=> {
//           cb(null, uuidv4() + "-" + file.originalname)
//         }
//       })


//       function fileFilter (req, file, cb) {
//         console.log(file)
//         if(file.mimetype.startsWith('image')){

//           cb(null, true)
//         }else{
//           cb(new AppError('image only', 401), false)
//         }


//       }

//       const upload = multer({ storage , fileFilter , limits:{
//         fieldSize : 1 * 1024 * 1024
//       }})

//       return upload
// }

// export const uploadSingelFile = (filedName , folderName) => fileUpolad(folderName).single(filedName)

// export const uploadMaxOFlFile = (arrayOfFields , folderName) => fileUpolad(folderName).fields(arrayOfFields)
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { AppError } from "../utilts/appError.js";
import dotenv from "dotenv";

dotenv.config(); // Load .env variables

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

export const upload = multer({ storage, fileFilter });

// Middleware to process single image upload
export const uploadSingleImage = (fieldName, folderName) => {
  return async (req, res, next) => {
    upload.single(fieldName)(req, res, async (err) => {
      if (err) return next(err);

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


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
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../config/cloudinary.js';

export const fileUpload = (folderName) => {
  const storage = new CloudinaryStorage({
    cloudinary,
    params: {
      folder: folderName,
      allowed_formats: ["jpg", "png", "jpeg", "webp"]
    },
  });

  const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
      cb(null, true);
    } else {
      cb(new AppError("image only", 400), false);
    }
  };

  return multer({
    storage,
    fileFilter,
    limits: { fileSize: 1 * 1024 * 1024 }
  });
};

export const uploadSingleFile = (fieldName, folderName) =>
  fileUpload(folderName).single(fieldName);

export const uploadMaxOfFile = (fields, folderName) =>
  fileUpload(folderName).fields(fields);

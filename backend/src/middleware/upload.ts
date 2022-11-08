import util from "util";
import multer from "multer";
//filesize cannot be greater than 10MB
const maxSize = 10 * 1024 * 1024;
const DIR = '/uploads/';
import fs from 'fs';

let storage = multer.diskStorage({
  destination: (req:any, file:any, cb:any) => {
    cb(null, process.cwd() + `${DIR}`);
  },
  filename: (req:any, file:any, cb:any) => {    
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");

 const deleteUpload = (imagename:string) => {
  fs.unlinkSync(process.cwd() + DIR + imagename);
}

const uploadFileMiddleware = util.promisify(uploadFile);
export { uploadFileMiddleware, deleteUpload}
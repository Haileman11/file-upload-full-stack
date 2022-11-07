const util = require("util");
const multer = require("multer");
const { v4: uuidv4 } = require('uuid');
const maxSize = 2 * 1024 * 1024;
let storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, __basedir + "/uploads/");
  },
  filename: (req, file, cb) => {    
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");


let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
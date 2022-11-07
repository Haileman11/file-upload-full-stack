const util = require("util");
const multer = require("multer");
const { v4: uuidv4 } = require('uuid');
//filesize cannot be greater than 10MB
const maxSize = 10 * 1024 * 1024;
const DIR = '/uploads/';
const fs = require('fs')

let storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, __basedir + `${DIR}`);
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

exports.deleteUpload = (imagename) => {
  fs.unlinkSync(__basedir + DIR + imagename);
}

exports.uploadFileMiddleware = util.promisify(uploadFile);
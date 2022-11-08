import { Request, Response } from "express";

import { uploadFileMiddleware, deleteUpload } from "../middleware/upload";
import db from "../models";
const FileModel = db.files;
class Controller{

  // upload = async (req:Request, res:Response) => {
  //   try {    
  //     await uploadFileMiddleware(req, res);
  //     if (req.file == undefined) {
  //       return res.status(400).send({ message: "Please upload a file!" });
  //     }
  //     res.status(200).send({
  //       message: `File ${req.file.originalname} was uploaded successfully.`
  //     });
  //   } catch (err) { 
  //     console.log(err);
  //     res.status(500).send({
  //       message: `Unable to upload the file. ${err}`,
  //     });
  //   }
  // };
  
  create = async(req:Request, res:Response) => {
    try {    
      await uploadFileMiddleware(req, res);
      if (req.file == undefined) {
        return res.status(400).send({message: "Please upload a file!"});
      }
      // Save file in the database
      const file = {
        filename: req.file.originalname,
        filesize: req.file.size,
      };
      FileModel.create(file)
        .then((data:any) => {
          res.send(data);
        })
        .catch((err:any) => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the File."
          });
        });
    } catch (err) {
      res.status(500).send({
        message: `Unable to upload the file. ${err}`,
      })
    };
  };
  //get all files
  findAll = async(req:Request, res:Response) => {
    FileModel.findAll({ })
      .then((data:any) => {
        res.send(data);
      })
      .catch((err:any) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving files."
        });
      });
  };
  //delete file 
  delete = async(req:Request, res:Response) => {
    const id = req.params.id;
    try {
      let result = await FileModel.findByPk(id);
        
  
      deleteUpload(result.filename);
      let num = await FileModel.destroy({
        where: { id: id }
      });
      if (num == 1) {
        res.send({
          message: "File was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete File with id=${id}. File was not found!`
        });
      }   
      // return res.status(200).send('Successfully! Image has been Deleted');
    } catch (err) {
      // handle the error
      return res.status(400).send({message:`Could not delete File. ${err}`});
    }
  };
}
export default Controller
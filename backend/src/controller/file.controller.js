const uploadFile = require("../middleware/upload");
const upload = async (req, res) => {
  try {    
    await uploadFile(req, res);
    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }
    res.status(200).send({
      message: `File ${req.file.originalname} was uploaded successfully.`
    });
  } catch (err) { 
    console.log(err);
    res.status(500).send({
      message: `Unable to upload the file. ${err}`,
    });
  }
};

module.exports = upload;
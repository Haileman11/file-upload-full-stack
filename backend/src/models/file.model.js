module.exports = (sequelize, Sequelize) => {
    const FileModel = sequelize.define("file", {
      filename: {
        type: Sequelize.STRING
      },
      filesize: {
        type: Sequelize.STRING
      },
    });
  
    return FileModel;
  };
const initFileModel=  (sequelize: any, Sequelize:any ) => {
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
export default initFileModel
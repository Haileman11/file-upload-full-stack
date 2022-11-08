
import { Dialect, Sequelize } from "sequelize";
import config from "../config/config";
import initFileModel from "./file.model";

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect as Dialect,
});

const db = {
  Sequelize ,
  sequelize ,
  files : initFileModel(sequelize, Sequelize)
};

export default db;
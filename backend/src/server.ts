import cors from "cors";
import express from "express";
import initRoutes from "./routes";
import db from "./models";

require("dotenv").config();

const app = express();
// global.__basedir = __dirname;
var corsOptions = {
  origin: "*"
};
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));


db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err: Error) => {
    console.log("Failed to sync db: " + err.message);
  });

initRoutes(app);
let port = 8000;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
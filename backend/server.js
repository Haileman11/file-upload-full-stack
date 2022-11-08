const cors = require("cors");
const express = require("express");

const app = express();
global.__basedir = __dirname;
var corsOptions = {
  origin: "*"
};
app.use(cors(corsOptions));
const initRoutes = require("./src/routes");
app.use(express.urlencoded({ extended: true }));

const db = require("./src/models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

initRoutes(app);
let port = 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
const express = require("express");
const router = express.Router();
const controller = require("../controller/file.controller");
let routes = (app) => {
  router.post("/upload", controller);
  app.use(router);
};
module.exports = routes;
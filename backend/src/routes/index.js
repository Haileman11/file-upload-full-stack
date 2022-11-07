const express = require("express");
const router = express.Router();
const controller = require("../controller/file.controller");
let routes = (app) => {
  router.post("/upload", controller.upload);
  router.post("/files", controller.create);
  router.get("/files", controller.findAll);
  router.delete("/files/:id", controller.delete);
  app.use(router);
};
module.exports = routes;
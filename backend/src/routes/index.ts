import { Router } from 'express' 
const router = Router();
import Controller from "../controller/file.controller";
let controller=new Controller()
let initRoutes = (app:any) => {
  // router.post("/upload", controller.upload);
  router.post("/files", controller.create);
  router.get("/files", controller.findAll);
  router.delete("/files/:id", controller.delete);
  app.use(router);
};
export default initRoutes;
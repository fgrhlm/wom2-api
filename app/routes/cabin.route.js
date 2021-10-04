import { Router } from "express";
import CabinController from "../controllers/cabin.controller.js";

import jwtAuth from "../middleware/auth.js";

const CabinRouter = Router()

CabinRouter.get("/:id", jwtAuth, CabinController.findOne);
CabinRouter.get("/", jwtAuth, CabinController.findAll);
CabinRouter.post("/", jwtAuth,CabinController.create);
CabinRouter.delete("/:id", jwtAuth, CabinController.deleteOne);
CabinRouter.put("/:id", jwtAuth, CabinController.updateOne);

export default CabinRouter;
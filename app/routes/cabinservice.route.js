import { Router } from "express";
import CabinserviceController from "../controllers/cabinservice.controller.js";

const CabinserviceRouter = Router()

CabinserviceRouter.get("/:id", CabinserviceController.findOne);
CabinserviceRouter.get("/", CabinserviceController.findAll);
CabinserviceRouter.post("/", CabinserviceController.create);
CabinserviceRouter.delete("/:id", CabinserviceController.deleteOne);
CabinserviceRouter.put("/:id", CabinserviceController.updateOne);

export default CabinserviceRouter;
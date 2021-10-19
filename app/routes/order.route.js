import { Router } from "express";
import OrderController from "../controllers/order.controller.js";

const OrderRouter = Router()

OrderRouter.get("/:id", OrderController.findOne);
OrderRouter.get("/", OrderController.findAll);
OrderRouter.post("/", OrderController.create);
OrderRouter.delete("/:id", OrderController.deleteOne);
OrderRouter.put("/:id", OrderController.updateOne);

export default OrderRouter;
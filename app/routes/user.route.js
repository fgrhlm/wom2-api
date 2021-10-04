import { Router } from "express";
import UserController from "../controllers/user.controller.js";

import jwtAuth from "../middleware/auth.js";

const UserRouter = Router()

UserRouter.get("/:id", jwtAuth, UserController.findOne);
UserRouter.get("/", jwtAuth, UserController.findAll);
UserRouter.post("/", UserController.create);
UserRouter.delete("/:id", jwtAuth, UserController.deleteOne);
UserRouter.put("/:id", jwtAuth, UserController.updateOne);

export default UserRouter;
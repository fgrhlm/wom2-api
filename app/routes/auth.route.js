import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";

const AuthRouter = Router()

AuthRouter.post("/", AuthController.login);

export default AuthRouter;
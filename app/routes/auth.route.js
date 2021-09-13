import { Router } from "express";

const AuthRouter = Router()

AuthRouter.get("/", (req, res) => {
    res.json({"hello": "auth"});
});

export default AuthRouter;
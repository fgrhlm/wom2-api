import { Router } from "express";

const UsersRouter = Router()

UsersRouter.get("/", (req, res) => {
    res.json({"hello": "users"});
});

export default UsersRouter;
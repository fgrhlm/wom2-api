import { Router } from "express";

const CabinsRouter = Router()

CabinsRouter.get("/", (req, res) => {
    res.json({"hello": "cabins"});
});

export default CabinsRouter;
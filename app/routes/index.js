import { Router } from "express";

import OrderRouter from "./order.route.js";
import CabinserviceRouter from "./cabinservice.route.js" 

const router = Router();

router.use("/order",OrderRouter)
router.use("/service",CabinserviceRouter);

export default router;
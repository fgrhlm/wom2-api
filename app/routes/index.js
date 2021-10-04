import { Router } from "express";

import UserRouter from "./user.route.js";
import CabinRouter from "./cabin.route.js";
import BookingRouter from "./booking.route.js";
import AuthRouter from "./auth.route.js";

const router = Router();

router.use("/user",UserRouter);
router.use("/cabin",CabinRouter);
router.use("/booking",BookingRouter);
router.use("/auth",AuthRouter)

export default router;
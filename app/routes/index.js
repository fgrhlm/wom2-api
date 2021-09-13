import { Router } from "express";

import UsersRouter from "./users.route.js";
import CabinsRouter from "./cabins.route.js";
import BookingsRouter from "./bookings.route.js";
import AuthRouter from "./auth.route.js";

const router = Router();

router.use("/users",UsersRouter);
router.use("/cabins",CabinsRouter);
router.use("/bookings",BookingsRouter);
router.use("/auth",AuthRouter)

export default router;
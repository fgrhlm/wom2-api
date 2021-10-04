import { Router } from "express";
import BookingController from "../controllers/booking.controller.js";

import jwtAuth from "../middleware/auth.js";

const BookingRouter = Router()

BookingRouter.get("/:id", jwtAuth, BookingController.findOne);
BookingRouter.get("/", jwtAuth, BookingController.findAll);
BookingRouter.post("/", jwtAuth, BookingController.create);
BookingRouter.delete("/:id", jwtAuth, BookingController.deleteOne);
BookingRouter.put("/:id", jwtAuth, BookingController.updateOne);

export default BookingRouter;
import { Router } from "express";

const BookingsRouter = Router()

BookingsRouter.get("/", (req, res) => {
    res.json({"hello": "bookings"});
});

export default BookingsRouter;
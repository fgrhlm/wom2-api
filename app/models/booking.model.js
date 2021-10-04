import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({        
    cabin_id: String, 
    booked_from: Date,
    booked_to: Date,
    user_id: String
})

export default mongoose.model("Booking",BookingSchema);
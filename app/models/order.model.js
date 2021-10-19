import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    cabin_id: { type: String, required: true},
    service_id: { type: String, required: true},
    date: { type: Date, required: true},
})

export default mongoose.model("Order",OrderSchema,"orders");
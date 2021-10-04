import mongoose from "mongoose";

const CabinSchema = new mongoose.Schema({
    address: {type: String, required: true},
    size: {type: Number, required: true},
    sauna: {type: Boolean, required: true},
    price: {type: Number, required: true},
    user_id: String
})

export default mongoose.model("Cabin",CabinSchema);
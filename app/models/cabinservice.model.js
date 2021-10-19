import mongoose from "mongoose";

const CabinserviceSchema = new mongoose.Schema({
    service_name: { type: String, required: true},
    price: { type: Number, required: true},
})

export default mongoose.model("Cabinservice",CabinserviceSchema,"cabinservices");
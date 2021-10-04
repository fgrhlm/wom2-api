import BookingModel from "../models/booking.model.js";
import CabinModel from "../models/cabin.model.js";

const BookingService = {
    findOne: async (id) => {
        try{
            const doc = await BookingModel.findById(id).exec();

            return doc;
        }catch (e){
            throw e;
        }
    },
    findAll: async () => {
        try{
            const doc = await BookingModel.find().exec()
        
            return doc;
        }catch (e){
            throw e;
        }
    },
    
    create: async (doc,userId) => {
        try{
            doc.user_id = userId;
            const q = await BookingModel.create(doc);

            const retObject = {
                "id": q._id
            }

            return retObject;
        }catch (e){
            throw e;
        }
    },

    deleteOne: async (id,userId) => {
        try{
            const bookingDoc = await BookingModel.findById(id).exec();
            if(!bookingDoc) return null;

            const cabinDoc = await CabinModel.findById(bookingDoc.cabin_id).exec();

            if(bookingDoc.user_id != userId && cabinDoc.user_id != userId){
                return null;
            }

            const q = await BookingModel.findByIdAndDelete(id).exec();

            const retObject = {
                "id": q._id
            }

            return retObject;
        }catch (e){
            throw e;
        }
    },

    updateOne: async (id,booking,userId) => {
        try{
            const bookingDoc = await BookingModel.findById(id).exec();
            if(!bookingDoc) return null;
            
            const cabinDoc = await CabinModel.findById(bookingDoc.cabin_id).exec();
            
            if(bookingDoc.user_id != userId && cabinDoc.user_id != userId){
                return null;
            }

            const updatedDoc = await BookingModel.findOneAndUpdate({_id: id},{$set:booking},{new: true}).exec();
            
            const retObject = {
                "id": updatedDoc._id
            }
            return retObject;
        }catch (e){
            throw e;
        }
    }
}

export default BookingService;
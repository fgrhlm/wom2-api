import CabinModel from "../models/cabin.model.js";

const CabinService = {
    findOne: async (id) => {
        try{
            const doc = await CabinModel.findById(id).exec();

            return doc;
        }catch (e){
            throw e;
        }
        
    },
    findAll: async () => {
        try{
            const docs = await CabinModel.find().exec();
            
            return docs;
        }catch (e){
            throw e;
        }
    },
    
    create: async (doc,userId) => {
        try{
            const q = await CabinModel.create(doc)
            q.user_id = userId;
            q.save();

            const retObject = {
                "id": q._id
            }

            return retObject;
        }catch (e){
            throw e;
        }
    },

    deleteOne: async (id) => {
        try{
            const q = await CabinModel.findByIdAndDelete(id).exec()

            return q
        }catch (e){
            throw e;
        }
    },

    updateOne: async (id,cabin,userId) => {
        try{
            const cabinDoc = await CabinModel.findById(id).exec();
            if(cabinDoc.user_id != userId) return null;
            const doc = await cabinDoc.updateOne({_id: id},{$set:cabin},{new: true});
            
            const retObject = {
                "id": doc._id
            }

            return retObject;
        }catch (e){
            throw e;
        }
    }
}

export default CabinService;
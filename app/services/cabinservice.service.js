import CabinserviceModel from "../models/cabinservice.model.js";

const CabinserviceService = {
    findOne: async (id) => {     
        const q = await CabinserviceModel.findById(id);
        return q;
    },
    findAll: async () => {
        const q = await CabinserviceModel.find();
        return q;
    },
    create: async (doc) => {
        const q = await CabinserviceModel.create(doc);
        const retObject = {
            "id": q._id
        }
        return retObject;
    },

    deleteOne: async (id) => {
        const q = await CabinserviceModel.findByIdAndDelete(id).exec()
        const retObject = {
            "id": q._id
        }
        return retObject;
    },

    updateOne: async (id,cabinservice) => {
        const doc = await CabinserviceModel.findOneAndUpdate({_id: id},{$set:cabinservice},{new: true}).exec();
        const retObject = {
            "id": doc._id
        }
        return retObject;
    }
}

export default CabinserviceService;
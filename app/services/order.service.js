import OrderModel from "../models/order.model.js";

const OrderService = {
    findOne: async (id) => {     
        const q = await OrderModel.findById(id);
        return q;
    },
    findAll: async () => {
        const q = await OrderModel.find();
        return q;
    },
    
    create: async (doc) => {
        const q = await OrderModel.create(doc);
        const retObject = {
            "id": q._id
        }
        return retObject;
    },

    deleteOne: async (id) => {
        const q = await OrderModel.findByIdAndDelete(id).exec()
        const retObject = {
            "id": q._id
        }
        return retObject;
    },

    updateOne: async (id,order) => {
        const doc = await OrderModel.findOneAndUpdate({_id: id},{$set:order},{new: true}).exec();
        const retObject = {
            "id": doc._id
        }
        return retObject;
    }
}

export default OrderService;
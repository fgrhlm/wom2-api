import UserModel from "../models/user.model.js";

const UserService = {
    findOne: async (id) => {     
        try{
            const q = await UserModel.findById(id).select("_id username firstName lastName email");

            return q;
        }catch (e){
            throw e;
        }
    },
    findAll: async () => {
        try{
            const q = await await UserModel.find().select("_id username firstName lastName email");

            return q;
        }catch (e){
            throw e;
        }
    },
    
    create: async (doc) => {
        try{
            const q = await UserModel.create(doc);

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
            const q = await UserModel.findByIdAndDelete(id).exec()
        
            const retObject = {
                "id": q._id
            }

            return retObject;
        }catch (e){
            throw e;
        }
    },

    updateOne: async (id,user) => {
        try{
            const doc = await UserModel.findOneAndUpdate({_id: id},{$set:user},{new: true}).exec();
            
            const retObject = {
                "id": doc._id
            }

            return retObject;
        }catch (e){
            throw e;
        }
    }
}

export default UserService;
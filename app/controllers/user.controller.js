import UserService from "../services/user.service.js";

const UserController = {
    findOne: async (req,res,next) => {
        try{
            const user = await UserService.findOne(req.params.id)
            return res.status(200).json(user);
        }catch (e){
            return res.status(500).json({error: e.message})
        }
        
    },
    findAll: async (req,res) => {
        try{
            const users = await UserService.findAll();
            return res.status(200).json(users);
        }catch (e){
            res.status(500).json({error: e.message});
        }
    },
    create: async (req,res) => {
        try{
            const doc = await UserService.create(req.body);
            return res.status(200).json(doc);
        }catch (e){
            return res.status(500).json({error: e.message});
        }
    },
    deleteOne: async (req,res) => {
        if(req.authUser.sub != req.params.id) return res.status(403).json({error: "Not allowed!"});
        
        try{
            const doc = await UserService.deleteOne(req.params.id);
            return res.status(200).json(doc);
        }catch (e){
            return res.status(500).json({error: e.message})
        }
        
    },
    updateOne: async (req,res) => {
        if(req.authUser.sub != req.params.id) return res.status(403).json({error: "Not allowed!"});
        
        try{
            const doc = await UserService.updateOne(req.params.id,req.body)
            return res.status(200).json(doc);
        }catch (e){
            return res.status(500).json({error: e.message});
        }
    }
}

export default UserController;
import CabinService from "../services/cabin.service.js";

const CabinController = {
    findOne: async (req,res,next) => {
        try{
            const cabin = await CabinService.findOne(req.params.id)
            return res.status(200).json(cabin);
        }catch (e){
            return res.status(500).json({error: e.message})
        }
    },
    findAll: async (req,res) => {
        try{
            const cabins = await CabinService.findAll();
            return res.status(200).json(cabins);
        }catch (e){
            return res.status(500).json({error: e.message});
        }
    },
    create: async (req,res) => {
        try{
            const doc = await CabinService.create(req.body, req.authUser.sub);
            return res.status(200).json(doc);
        }catch (e){
            return res.status(500).json({error: e.message});
        }
    },
    deleteOne: async (req,res) => {
        try{
            const doc = await CabinService.deleteOne(req.params.id);
            return res.status(200).json(doc);
        }catch (e){
            return res.status(500).json({error: e.message});
        }
    },
    updateOne: async (req,res) => {
        try{
            const doc = await CabinService.updateOne(req.params.id,req.body,req.authUser.sub)
            if(!doc) return res.status(403).json({error: "Not allowed!"});
            return res.status(200).json(doc);
        }catch (e){
            return res.status(500).json({error: e.message});
        }
    }
}

export default CabinController;
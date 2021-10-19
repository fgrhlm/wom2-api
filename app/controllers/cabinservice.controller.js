import CabinserviceService from "../services/cabinservice.service.js";

const CabinserviceController = {
    findOne: async (req,res,next) => {
        try{
            const cabinservice = await CabinserviceService.findOne(req.params.id)
            return res.status(200).json(cabinservice);
        }catch (e){
            return res.status(500).json({error: e.message})
        }
        
    },
    findAll: async (req,res) => {
        try{
            const cabinservices = await CabinserviceService.findAll();
            return res.status(200).json(cabinservices);
        }catch (e){
            res.status(500).json({error: e.message});
        }
    },
    create: async (req,res) => {
        try{
            const doc = await CabinserviceService.create(req.body);
            return res.status(200).json(doc);
        }catch (e){
            return res.status(500).json({error: e.message});
        }
    },
    deleteOne: async (req,res) => {
        try{
            const doc = await CabinserviceService.deleteOne(req.params.id);
            return res.status(200).json(doc);
        }catch (e){
            return res.status(500).json({error: e.message})
        }
        
    },
    updateOne: async (req,res) => {
        try{
            const doc = await CabinserviceService.updateOne(req.params.id,req.body)
            return res.status(200).json(doc);
        }catch (e){
            return res.status(500).json({error: e.message});
        }
    }
}

export default CabinserviceController;
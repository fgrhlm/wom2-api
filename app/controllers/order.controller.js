import OrderService from "../services/order.service.js";

const OrderController = {
    findOne: async (req,res,next) => {
        try{
            const order = await OrderService.findOne(req.params.id)
            return res.status(200).json(order);
        }catch (e){
            return res.status(500).json({error: e.message})
        }
        
    },
    findAll: async (req,res) => {
        try{
            const orders = await OrderService.findAll();
            return res.status(200).json(orders);
        }catch (e){
            res.status(500).json({error: e.message});
        }
    },
    create: async (req,res) => {
        try{
            const doc = await OrderService.create(req.body);
            return res.status(200).json(doc);
        }catch (e){
            return res.status(500).json({error: e.message});
        }
    },
    deleteOne: async (req,res) => {
        try{
            const doc = await OrderService.deleteOne(req.params.id);
            return res.status(200).json(doc);
        }catch (e){
            return res.status(500).json({error: e.message})
        }
        
    },
    updateOne: async (req,res) => {
        try{
            const doc = await OrderService.updateOne(req.params.id,req.body)
            return res.status(200).json(doc);
        }catch (e){
            return res.status(500).json({error: e.message});
        }
    }
}

export default OrderController;
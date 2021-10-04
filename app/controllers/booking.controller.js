import BookingService from "../services/booking.service.js";

const BookingController = {
    findOne: async (req,res,next) => {
        try{
            const booking = await BookingService.findOne(req.params.id)
            return res.status(200).json(booking);
        }catch (e){
            return res.status(500).json({error: e.message});
        }
        
    },
    findAll: async (req,res) => {
        try{
            const bookings = await BookingService.findAll();
            return res.status(200).json(bookings);
        }catch (e){
            return res.status(500).json({error: e.message})
        }
    },
    create: async (req,res) => {
        try{
            const doc = await BookingService.create(req.body,req.authUser.sub);
            return res.status(200).json(doc);
        }catch (e){
            return res.status(500).json({error: e.message});
        }
    },
    deleteOne: async (req,res) => {
        try{
            const doc = await BookingService.deleteOne(req.params.id, req.authUser.sub);
            if(!doc) return res.status(403).json({error: "Not allowed!"});
        
            return res.status(200).json(doc);
        }catch (e){
            res.status(500).json({error: e.message});
        }
    },
    updateOne: async (req,res) => {
        try{
            const doc = await BookingService.updateOne(req.params.id,req.body,req.authUser.sub);
            if(!doc) return res.status(403).json({error: "Not allowed!"});
            return res.status(200).json(doc);
        }catch (e){
            return res.status(500).json({error: e.message});
        }
    }
}

export default BookingController;
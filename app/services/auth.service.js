import UserModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Lånat lite från lektionsexemplen
// https://github.com/fw-teaching/wom21-exempel/blob/main/routes/users.js

const AuthService = {
    login: async (email,password) => {        
        // Kollar ifall en användare med 'email' finns
        // Kollar om användarens hashade password matchar med 'password'
        // Om allt lyckas så returneras en giltig token
        try{
            const user = await UserModel.findOne({email: email}).exec();
            if(!user) return null;
    
            const match = await bcrypt.compare(password, user.password);
            if(!match) return null;
            
            const body = {sub: user._id, email: user.email};
            const secret = process.env.JWT_SECRET;
            const opts = {expiresIn: "12h"};
    
            const token = await jwt.sign(body,secret,opts);
    
            return token;
        }catch (e){
            throw e;
        }
    }
}

export default AuthService;
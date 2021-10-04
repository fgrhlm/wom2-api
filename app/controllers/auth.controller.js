import AuthService from "../services/auth.service.js";

const AuthController = {
    login: async (req,res) => {
        try{
            const token = await AuthService.login(
                req.body.email,
                req.body.password
            )

            if(!token) return res.status(401).json({error: "Authorization failed!"}); 
            return res.status(201).send(token);
        }catch (e){
            return res.status(500).json({error: e.message});
        }
    }
}

export default AuthController;
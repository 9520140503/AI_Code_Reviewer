import jwt from "jsonwebtoken";
import User from "../models/userModel.js"

const authenticate = async(req,res,next) => {
    const token = req.cookies.token;
   
    if(!token){
       return res.status(401).json({ message: 'No token found' }); 
    }

    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET);
    
        const user = await User.findById(decode.id);

        if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

        req.user = user;
        next();
    } catch (error) {
         return res.status(401).json({ message: 'Invalid token' });
    }
}

export default authenticate;
import jwt from "jsonwebtoken";
import User from "../models/userModel.js"

const authenticate = async(req,res,next) => {
    const tokenAuth = req.headers.authorization;
   
    if(!tokenAuth || !tokenAuth.startsWith("Bearer")){
       return res.status(401).json({ message: 'No token found' }); 
    }

    const token = tokenAuth.split(" ")[1];

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
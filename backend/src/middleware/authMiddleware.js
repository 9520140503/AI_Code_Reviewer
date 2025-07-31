import jwt from "jsonwebtoken";

const authenticate = async(req,res,next) => {
    const token = req.cookies.token;
    if(!token){
       return res.status(401).json({ message: 'No token found' }); 
    }

    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
         return res.status(401).json({ message: 'Invalid token' });
    }
}

export default authenticate;
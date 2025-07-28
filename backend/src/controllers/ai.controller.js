import aiService from "../services/ai.service.js"

const  getResponse = async(req,res) => {
    const code = req.body.code;

    if(!code){
        return res.status(400).send("code is needed");
    }

    const response = await aiService(code);

    // console.log("Backend is hitted",code);
    
    res.send(response);
}

export default getResponse;
import {getReview,getSummaries,getConvertedCode} from "../services/ai.service.js"

export const getResponse = async(req,res) => {
    const code = req.body.code;
    
    const response = await getReview(code);
    res.send(response);
}

export const getSummary = async(req,res) => {
    const para = req.body.para;
    console.log("Backend is hitted",para);
    if(!para){
        return res.status(400).send("Para is needed");
    }
    const response = await getSummaries(para);
    res.send(response);
}

export const getCode = async(req,res) => {
    const code = req.body.code;
    if(!code){
        return res.status(400).send("code is needed");
    }
    const response = await getConvertedCode(code);
    console.log(response);
    res.send(response);
}

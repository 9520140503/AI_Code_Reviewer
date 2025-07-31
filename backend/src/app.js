import express from "express"
import aiRoutes from "./routes/ai.routes.js"
import userRouter from "./routes/user.js";
import dotenv from "dotenv"
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

app.use(express.json());

app.use(cookieParser())

app.use(cors(
    {
    origin:'http://localhost:5173',
    methods: ["GET","POST"],
    credentials:true
}
));

app.get('/',(req,res) => {
    console.log(process.env.GEMINI_KEY);
    res.send("Hello World")
})


app.use('/user',userRouter);
app.use('/ai',aiRoutes);

export default app;
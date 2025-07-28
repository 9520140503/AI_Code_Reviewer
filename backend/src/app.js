import express from "express"
import aiRoutes from "./routes/ai.routes.js"
import dotenv from "dotenv"
import cors from "cors";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors(
    {
    origin:'http://localhost:5173',
    methods: ["GET","POST"],
}
));

app.get('/',(req,res) => {
    console.log(process.env.GEMINI_KEY);
    res.send("Hello World")
})

app.use('/ai',aiRoutes)

export default app;
import express from "express"
import aiRoutes from "./routes/ai.routes.js"
import userRouter from "./routes/user.js";
import dotenv from "dotenv"
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

app.use(express.json());

app.use(cookieParser());

const allowedOrigins = ['https://codify11.netlify.app'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true // ✅ Critical for sending cookies
}));

app.get('/',(req,res) => {
    console.log(process.env.GEMINI_KEY);
    res.send("Hello World")
})


app.use('/user',userRouter);
app.use('/ai',aiRoutes);

export default app;
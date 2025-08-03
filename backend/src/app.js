import express from "express"
import aiRoutes from "./routes/ai.routes.js"
import userRouter from "./routes/user.js";
import dotenv from "dotenv"
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

app.set('trust proxy', 1);

app.use(express.json());

app.use(cookieParser());

app.use((req, res, next) => {
  console.log("🧩 Debugging incoming request:");
  console.log("Headers:", req.headers);
  console.log("Cookies:", req.cookies);
  next();
});

app.use(cors(
    {
    origin:'https://codify11.netlify.app',
    methods: ["GET", "POST", "PUT", "OPTIONS"],
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
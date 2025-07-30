import dotenv from "dotenv"
import mongoose from "mongoose";
dotenv.config();

import app from "./src/app.js"

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB is connected successfully");
})

app.listen(3000,() => {
    console.log("Server is running at port 3000");
})
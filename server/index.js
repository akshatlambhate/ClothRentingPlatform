import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import UserRouter from './Routes/user.route.js'
import cookieParser from "cookie-parser";


//Server Creation
const app = express();
const PORT = 8001;
app.listen(PORT, () => console.log(`Server Started at Port: ${PORT}`));

//Database Connection
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connnected to MongoDB"))
  .catch((error) => console.log(error));


// Routes
app.use(express.json())
app.use(cookieParser())
app.use('/api/user',UserRouter)
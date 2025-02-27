import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app=express();
app.use(cors({
    origin:process.env.CORS_LINK
}))
app.use(express.static('views'));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.json()); // Parse JSON data
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

import { userRouter } from "./routes/user.router.js";
app.use('/',userRouter);
import { trainerRouter } from "./routes/trainer.router.js";
app.use('/',trainerRouter);
app.get('/',(req,res)=>{
    res.render('index');
})
export {app};
import express from "express"
import cors from "cors"
import {clerkMiddleware} from "@clerk/express";
const app=express();
import "dotenv/config"
import { connectDb } from "./lib/db.js";
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use(clerkMiddleware());
app.get("/",(req,res)=>{
    res.send("Hello Shalem")
})

const PORT=process.env.PORT;
app.listen(PORT,(req,res)=>{
    console.log("Server running on",PORT);
    connectDb();
})
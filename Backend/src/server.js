import express from "express"
import cors from "cors"
import fs from "fs"
import path from "path"
import {clerkMiddleware} from "@clerk/express";
const app=express();
import "dotenv/config"
import { connectDb } from "./lib/db.js";
app.use(express.json());
const PORT=process.env.PORT;
const FRONTEND_URL=process.env.FRONTEND_URL;
app.use(cors({
  origin: "*"
}));
app.use(clerkMiddleware());

const publicDir=path.join(process.cwd(),"public");
if(fs.existsSync(publicDir)){
    app.use(express.static(publicDir))
    app.get("/{*any}",(req,res,next) =>{
      res.sendFile(path.join(publicDir,"index.html"),(err) =>next(err));
    })
}

app.listen(PORT,(req,res)=>{
    console.log("Server running on",PORT);
    connectDb();
})
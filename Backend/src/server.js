import express from "express"
const app=express();
import "dotenv/config"
app.get("/",(req,res)=>{
    res.send("Hello Shalem")
})
const PORT=process.env.PORT;
app.listen(PORT,(req,res)=>{
    console.log("Server running on",PORT);
})
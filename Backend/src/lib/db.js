import mongoose from "mongoose";
export async function connectDb(){
    try{
    const mongoUrl=process.env.MONGO_URL
     if (!mongoUrl){
      throw new Error("MONGO_URI is required");
    }
    await mongoose.connect(mongoUrl);
    console.log("Database Connected");
    }
    catch(error){
    console.error("MongoDB connection error:", error.message);
    process.exit(1);


    }
}
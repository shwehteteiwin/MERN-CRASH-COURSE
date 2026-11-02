import mongoose from "mongoose"
// import { preloadModule } from "react-dom";
// import dotenv from 'dotenv';

// dotenv.config();

export const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch(error){
         console.error(`MongoDB connection failed: ${error.message}`);
        process.exit(1); // process 1 code means failure. 0 means success
    }
    

    
}
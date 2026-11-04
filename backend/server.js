import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import path from "path"
// import Product from "./models/product.model.js";
// import mongoose from "mongoose";

dotenv.config();

const __dirname = path.resolve();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //allows us to accept JSON data in the req.body
app.use("/api/products", productRoutes);

if (process.env.NODE_ENV=="production"){
  app.use(express.static(path.join(__dirname,"/frontend/dist")))

  app.get("/{*splat}",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"))
  })
}

app.listen(PORT, () => {
  connectDB();
  console.log(`server started at http://localhost:${PORT}`);
});

import express from "express";
import mongoose from "mongoose";
import Product from "../models/product.model.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const product = req.body; // user will send this data

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in Create product:", error.message);
    res.status(500).json({ success: false, data: "Server Error" });
  }
  // res.send("Server is ready")
}); //create something

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  // console.log("id:", id);
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product Deleted." });
  } catch (error) {
    console.log("error in deleting products:", error.message);

    res.status(400).json({ success: false, message: "Product not found" });
  }
});
// console.log(process.env.MONGODB_URI);

router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("error in fetching products:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});


router.put("/:id", async(req,res)=>{
      const {id}  = req.params;
    // const product = await Product.findByIdAndUpdate(id, req.body, {new:true});
    const product = req.body;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({success:false, message:"Invalid product ID"});
  }

  try{
      const updatedProduct = await Product.findByIdAndUpdate(id,product,{new:true});
    
    res.status(200).json({success:true, data:updatedProduct});
  }catch(error){
    console.error("Error in updating product:", error.message);
    res.status(500).json({success:false, message:"Server Error"});
  }
})

export default router;

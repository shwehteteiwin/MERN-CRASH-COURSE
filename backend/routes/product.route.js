import express from "express";
// import mongoose from "mongoose";

import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";
const router = express.Router();

router.post("/", createProduct); //create something
router.delete("/:id", deleteProduct);
router.get("/", getProducts);
router.put("/:id", updateProduct);

export default router;

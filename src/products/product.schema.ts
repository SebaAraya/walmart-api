import * as mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
  id: Number,
  brand: String,
  description: String,
  image: String,
  price: Number
});

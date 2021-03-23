import * as mongoose from "mongoose";

export const DiscountSchema = new mongoose.Schema({
  id: Number,
  brand: String,
  threshold: Number,
  discount: Number
});

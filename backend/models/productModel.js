import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  bestseller: { type: Boolean, default: false }, // Make sure it's a Boolean field
  sizes: { type: [String], required: true },
  image: { type: [String], required: true },
  date: { type: Date, default: Date.now },
});


  


const productModel = mongoose.models.product || mongoose.model("product", productSchema);
export default productModel;

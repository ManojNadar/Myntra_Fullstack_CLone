import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  myntraUser: {
    type: String,
    required: true,
  },
  myntraEmail: {
    type: String,
    required: true,
  },
  myntraPassword: {
    type: String,
    required: true,
  },
  myntraRole: {
    type: String,
    enum: ["Buyer", "Seller", "Admin"],
    default: "Buyer",
  },
  cart: {
    type: [String],
  },
});

export default mongoose.model("User", userSchema);

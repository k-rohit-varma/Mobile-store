import mongoose from "mongoose";

const mobile_schema = {
  name: String,
  description: String,
  price: Number,
  image_url: String,
  brand: String,
  is_sold: {
    type: Boolean,
    default: false,
  },
  sold_date: Date,
  sold_to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer",
    default: null,
  },
  sold_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    default: null,
  },
};

export const mobile_model = mongoose.model("mobile", mobile_schema);

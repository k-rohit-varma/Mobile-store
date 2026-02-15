import mongoose from "mongoose";

const user_schema = {
  name: String,
  email: String,
  password: String,
  is_admin: {
    type: Boolean,
    default: false,
  },
  phone_number: {
    type: String,
    default: "",
  },
  sold_mobiles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "mobile",
    },
  ],
  sold_customer: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "customer",
    },
  ],
};

export const user_model = mongoose.model("user", user_schema);

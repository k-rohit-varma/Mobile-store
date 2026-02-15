import mongoose from "mongoose";

const customer_schema = {
  name: String,
  phone_number: String,
  mobile_count: {
    type: Number,
    default: 0,
  },
  salesman: [
    {
      // salesman is the user who sold the mobile to the customer
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  ],
  purchased_mobiles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "mobile",
      required: true,
    },
  ],
};

export const customer_model = mongoose.model("customer", customer_schema);

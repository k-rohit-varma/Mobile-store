import { customer_model } from "../db/customer_model.js";
import { mobile_model } from "../db/mobile_model.js";
import { user_model } from "../db/user_model.js";
// This should create customer , make the mobile as sold and link to the
// salesman whom sold the mobile.

export const create_customer = async (req, res) => {
  const { name, phone_number, mobile_count, mobile_id, salesman_id } = req.body;
  try {
    if (!name || !phone_number || !mobile_count || !salesman_id || !mobile_id) {
      return res
        .status(400)
        .json({ message: "All fields are required in customer creationg" });
    }

    //check if the customer already exist with same phone number

    const customer_exist = await customer_model.findOne({ phone_number });
    if (!customer_exist) {
      const customer = await customer_model.create({
        name,
        phone_number,
        mobile_count,
        salesman: [salesman_id],
        purchased_mobiles: [mobile_id],
      });

      const updated_mobile = await mobile_model.findByIdAndUpdate(mobile_id, {
        is_sold: true,
        sold_date: new Date(),
        sold_to: customer._id,
        sold_by: salesman_id,
      });

      const updated_user = await user_model.findByIdAndUpdate(salesman_id, {
        $push: {
          sold_mobiles: mobile_id,
          sold_customer: customer._id,
        },
      });

      return res.status(201).json({
        message: "Customer created successfully",
        customer,
        updated_mobile,
        updated_user,
      });
    } else {
      const updated_customer = await customer_model.findByIdAndUpdate(
        customer_exist._id,
        {
          $push: {
            salesman: salesman_id,
            purchased_mobiles: mobile_id,
          },
          $inc: { mobile_count: mobile_count },
        },
      );

      const updated_mobile = await mobile_model.findByIdAndUpdate(mobile_id, {
        is_sold: true,
        sold_date: new Date(),
        sold_to: updated_customer._id,
        sold_by: salesman_id,
      });

      const updated_user = await user_model.findByIdAndUpdate(salesman_id, {
        $push: {
          sold_mobiles: mobile_id,
          sold_customer: updated_customer._id,
        },
      });

      return res.status(200).json({
        message: "Customer updated successfully",
        customer: updated_customer,
        updated_mobile,
        updated_user,
      });
    }
  } catch (err) {
    console.error("Error in creating customer:", err);
    res
      .status(500)
      .json({ message: "Internal Server Error in creating customer", err });
  }
};

export const get_all_customers = async (req, res) => {
  try {
    const customers = await customer_model.find();
    return res.status(200).send({
      message: "Customers fetched successfully ",
      customers,
    });
  } catch (err) {
    return res.status(500).send("server error getting all the customers ");
  }
};

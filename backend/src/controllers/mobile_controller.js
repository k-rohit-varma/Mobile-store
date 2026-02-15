import { mobile_model } from "../db/mobile_model.js";

export const create_mobile = async (req, res) => {
  const { name, description, price, image_url, brand } = req.body;
  if (!name || !description || !price || !image_url || !brand) {
    return res.status(400).json({ message: "All Mobile fields are required" });
  }
  try {
    const new_mobile = await mobile_model.create({
      name,
      description,
      price,
      image_url,
      brand,
    });
    return res
      .status(201)
      .json({ message: "Mobile created successfully", mobile: new_mobile });
  } catch (err) {
    return res.status(500).json({ message: "Server Error in mobile creation" });
  }
};

export const get_all_mobiles = async (req, res) => {
  try {
    const mobiles = await mobile_model.find();
    return res.status(200).json({
      message: "Mobiles fetched successfully",
      mobiles,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server Error in fetching mobiles" });
  }
};

export const get_by_id = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ message: "Mobile id is required" });
  }
  try {
    const mobile = await mobile_model.findById({ _id: id });
    if (!mobile) {
      return res.status(400).json({ message: "Mobile not found" });
    }
    return res.status(200).send({
      message: "Mobile found successfully",
      mobile: mobile,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server Error in fetching mobile by id" });
  }
};

import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// function for adding product
const addProduct = async (req, res) => {
  try {
    const { name, description, category, prices, popular } = req.body;
    const image = req.files?.image?.[0];

    let imageUrl;
    if (image) {
      const result = await cloudinary.uploader.upload(image.path, {
        resource_type: "image",
      });
      imageUrl = result.secure_url;
    } else {
      imageUrl = "https://via.placeholder.com/150";
    }
    const parsedPrices = JSON.parse(prices);
    const price = parsedPrices.reduce((acc, curr) => {
      acc[curr.size] = Number(curr.price);
      return acc;
    }, {});

    const sizes = parsedPrices.map((item) => item.size);
    const productData = {
      name,
      description:
        description && description.trim() !== "" && description !== "undefined"
          ? description
          : "No description provided.",

      category,
      price,
      popular: popular === "true",
      sizes,
      image: imageUrl,
      date: Date.now(),
    };

    console.log("Product Data:", productData);
    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Food Added", product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// function for remove a product

const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// function for list product
const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// function for getting single product information

const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { addProduct, removeProduct, singleProduct, listProduct };

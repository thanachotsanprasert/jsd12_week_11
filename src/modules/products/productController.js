import Product from "./productModel.js";
import asyncHandler from "../../middleware/asyncHandler.js";

// @desc    Get all products
// @route   GET /api/products
export const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

// @desc    Create a product
// @route   POST /api/products
export const createProduct = asyncHandler(async (req, res) => {
    const { name, price, description } = req.body;

    const product = new Product({
        name,
        price,
        description,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
});

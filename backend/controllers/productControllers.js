const Product = require('../models/productModel')


// Create A product --Admin

exports.createProduct = async (req, res, next) => {

    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
}


// Get All Products
exports.getAllProducts = async (req, res) => {

    const products = await Product.findOne()
    await res.status(200).json({
        success: true,
        products
    })
}

// Update product --Admin

exports.updateProduct = async (req, res, next) => {

    let product = await Product.findById(req.params.id)

    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Produt Not Found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false

    });
    res.status(200).json({
        success: true,
        product
    })

}

exports.deleteProduct = async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product Not Found"
        })
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: "Product Delete Successfully"
    })
}
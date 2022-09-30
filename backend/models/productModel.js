const mongoose = require("mongoose")

const productSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please Enter Porduct Name"]
    },
    description: {
        type: String,
        required: [true, "Please Enter Porduct Description"]
    },
    price: {
        type: String,
        required: [true, "Please Enter Porduct Price"],
        maxLength: [8, "Price connot exceed 8 character"]
    },
    rating: {
        type: Number,
        default: 0
    },
    images: [
        {

            public_id: {
                type: String,
                required: true
            },

            url: {
                type: String,
                required: true
            }

        }
    ],

    catagory: {
        type: String,
        required: [true, "Please Enter Product Catagory"]
    },
    Stock: {
        type: Number,
        required: [true, "Please Enter Product Stock"],
        maxLength: [4, "Stock  connot exceed 4 characters"],
        default: 1
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {

                type: String,
                required: true
            },
            rating: {

                type: Number,
                required: true
            },
            comment: {

                type: String,
                required: true
            }
        }
    ],
    caretedAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("Product", productSchema)
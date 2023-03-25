import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
        },
        name: {
            type: String,
            required: true
        },
        image: {
            type: [String]
        },
        price: {
            type: String,
            required: true
        },
        sellerId: {
            type: String,
        },
        type:{
            type: String
        },
        inventory:{
            type: Number
        },
        type_rent:{
            type: String
        },
        address:{
            type: String
        },
    }, {
        timestamps: true,
    }
);
export default mongoose.model('Product', ProductSchema)
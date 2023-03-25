import mongoose from "mongoose";

const SellerSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
        },
        name: {
            type: String,
            required: true
        },
        image: {
            type: String
        },
        phone: {
            type: String,
            required: true
        }
    }, {
        timestamps: true,
    }
);
export default mongoose.model('Seller', SellerSchema)
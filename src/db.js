import mongoose from "mongoose";
import dotenv from "dotenv";
import Seller from "./models/Seller.js";
import Product from "./models/Product.js";
import { products, sellers } from "./data.js";


dotenv.config()
export const connectDB = async() => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.set('debug', true)
        const conn = await mongoose.connect(process.env.URL_BD)
        console.log(`Mongo Connected: ${conn.connection.name}`);
        await Seller.deleteMany({});
        await Seller.insertMany(sellers);
        await Product.deleteMany({});
        await Product.insertMany(products);
    } catch (error) {
        console.error(`error: ${error.message}`)
        process.exit(1)
    }
}


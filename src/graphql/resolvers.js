import Seller from "../models/Seller.js"
import Product from "../models/Product.js";

export const resolvers = {
    Query: {
        sellers: async () => await Seller.find(),
        products: async () => await Product.find(),
        seller: async (_, {_id}) => await Seller.findById(_id),
        product: async (_, {_id}) => await Product.findById(_id),
        product_filter: async(_, {type}) => await Product.find({type: type}),
        product_search: async(_, {name, sellerId, showInventory}) => {
            return await Product.find({name: {$regex: name, $options: 'i'}, sellerId: {$regex: sellerId, $options: 'i'}, inventory: showInventory ? {$gte: 0} : {$gte: 10}})
        }
    },
    Product:{
        seller: async(parent) => {
            return await Seller.findOne({_id: parent.sellerId})
        }
    }
};
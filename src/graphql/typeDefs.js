import { gql } from "graphql-tag"

export const typeDefs = gql`
    type Query {
        sellers: [Seller]
        products: [Product]
        seller(_id: String!) : Seller
        product(_id: String!) : Product
        product_filter(sellerId: String, type: String) : [Product]
        product_search(name: String, sellerId: String, showInventory: Boolean) : [Product]
    }

    type Seller{
        _id: String
        name: String
        image: String
        phone: String
    }

    type Product{
        _id: String
        name: String
        image: [String]
        price: String
        inventory: Int
        type: String
        type_rent: String
        address: String
        sellerId: String
        seller: Seller
    }
`;
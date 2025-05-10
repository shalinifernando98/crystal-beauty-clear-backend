import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productId : {
        type : String,
        requied : true,
        unique : true,
    },
    name : {
        type : String,
        required : true,
    },
    altName : {
        type : [String],
        default : []
    },
    price : {
        type : Number,
        required : true
    },
    labledPrice : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        requied : true
    },
    images : {
        type : [String],
        required : true,
        default : ["https://images.yourstory.com/cs/4/211ccaf00e6d11e997fe8f165dce9bb1/Imageifxu-1596799036123-1601633425902.jpg?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75"]
    },
    stock : {
        type : Number,
        required : true
    },
})

const Product = mongoose.model("products" ,productSchema)
export default Product;
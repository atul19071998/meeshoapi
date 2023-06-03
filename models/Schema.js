const  mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
 
    {
    ProductName:{
        type:String,
    },
    ProductUrl:{
        type:String,
    },
    Ratings:{
        type:Number,
    },
    Reviews:{
        type:Number,
    },
    price:{
        type:Number,
    
    },
    
}
)
module.exports = mongoose.model("shoppingList",productSchema)
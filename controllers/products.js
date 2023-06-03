const Product = require("../models/Schema")
const getAllProducts = async(req,res) =>{
    const myBookData = await Product.find({})
    res.status(200).json({ myBookData});

};


const getAllProductsTesting = async (req,res) =>{
    const myBookData = await Product.find(req.query)
    res.status(200).json({myBookData});
}

module.exports = {getAllProducts,getAllProductsTesting}

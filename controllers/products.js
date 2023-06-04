const Product = require("../models/Schema")
const getAllProducts = async(req,res) =>{
    const meeshoData = await Product.find({})
    res.status(200).json({ meeshoData});

};


const getAllProductsTesting = async (req,res) =>{
    const  meeshoData= await Product.find(req.query)
    res.status(200).json({ meeshoData});
}

module.exports = {getAllProducts,getAllProductsTesting}

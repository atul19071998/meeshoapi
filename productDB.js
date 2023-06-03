require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/Schema");

const BookJson = require("./Books.json")

const  start = async () =>{
    try{
        await connectDB( process.env.MONGODB_URL);
        await Product.create(BookJson);
        console.log("success");
    } catch(error) {
        console.log(error);

    }
};

start()

;
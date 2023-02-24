const mongoose = require("mongoose");
const colors = require("colors");

//check the connection
const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Mongodb is connected ${mongoose.connection.host}`.bgGreen.white);
    } catch (error) {
        console.log(`Mongodb Server Issue ${error}`.bgRed.white);
    }
}
module.exports = connectDB;

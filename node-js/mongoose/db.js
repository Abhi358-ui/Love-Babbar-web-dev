const mongoose = require('mongoose');
const dotenv = require('dotenv');

// load the dotenv
dotenv.config()


// database connecting
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Mongodb connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports=connectDB;

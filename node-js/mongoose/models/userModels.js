const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 100,
    },
    age: {
      type: Number,
      maxlength: 100,
    },
    weight: {
      type: Number,
    },
    createAt:{
        type:Date,
        default:Date.now()
    }
  },
   
);

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;

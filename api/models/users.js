const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
    id: {
        type: Number,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    }
})

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
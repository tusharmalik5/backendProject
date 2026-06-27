const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "Username already exists"],
        required: [true, "Username is required"]
    },
    email: {
        type: String,
        unique: [true, "Email already exist"],
        required: [true, "Email is required"]
    },
    password: {
        type:String,
        required: [true, "Password is required"]
    },
    bio:String,
    profileImage: {
        type: String,
        default:"https://ik.imagekit.io/tusharmalik05/default%20image.jpg?updatedAt=1782221465745"
    }
})


const userModel = mongoose.model("users", userSchema)


module.exports = userModel
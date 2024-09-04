import mongoose from "mongoose"
import validator from "validator"

// Schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      unique: true,
      validate: validator.isEmail,
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
      minlength: [6, "Password length should be greater than 6 characters"],
    },
    location: {
      type: String,
      default: "India",
    },
  },
  { timestamps: true }
)

export default mongoose.model("User", userSchema)

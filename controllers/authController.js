import userModel from "../models/userModel.js"

export const registerController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body
    //validate
    if (!name) {
      //   return res
      //     .status(400)
      //     .send({ success: false, message: "please provide name" })
      next("name is required")
    }
    if (!email) {
      //   return res
      //     .status(400)
      //     .send({ success: false, message: "please provide email" })
      next("email is required")
    }
    if (!password) {
      //   return res
      //     .status(400)
      //     .send({ success: false, message: "please provide password" })
      next("password is required")
    }
    const existingUser = await userModel.findOne({ email })
    if (existingUser) {
      next("Email already registered. Please Login")
      //   return res.status(200).send({
      //     success: false,
      //     message: "Email already registered. Please Login",
      //   })
    }
    const user = await userModel.create({ name, email, password })
    res.status(201).send({
      success: true,
      message: "User created Successfully",
      user,
    })
  } catch (error) {
    next(error)
  }
}

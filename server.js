// const express = require('express')   now use module js instead of commonJs
// packagesimports
import express from "express"
import dotenv from "dotenv"
import colors from "colors"
import cors from "cors"
import morgan from "morgan"
//files imports
import connectDB from "./config/db.js"
//routes imports
import testRoutes from "./routes/testRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import errorMiddleware from "./middlewares/errorMiddleware.js"

//config dotenv
dotenv.config()

// mongoDB connection
connectDB()

// rest object
const app = express()

// middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

// routes
app.use("/api/v1/test", testRoutes)
app.use("/api/v1/auth", authRoutes)

// validation middleware
app.use(errorMiddleware)

const PORT = process.env.PORT || 8080
const DEV_MODE = process.env.DEV_MODE

app.listen(PORT, () => {
  console.log(
    `Node Server Running in ${process.env.DEV_MODE} Mode on port ${PORT}`.white
  )
})

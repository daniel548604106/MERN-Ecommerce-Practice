const express = require("express")
const app = express()
const connectDB = require("./config/db")
const dotenv = require("dotenv")
const { notFound, errorHandler } = require("./middleware/errorMiddleware")

dotenv.config()

app.use(express.json())
connectDB()

const productRoutes = require("./routes/productRoutes")
const userRoutes = require("./routes/userRoutes")

app.get("/", (req, res) => {
  res.send("APi is running")
})

app.use("/api/v1/products", productRoutes)
app.use("/api/v1/users", userRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(`Server is running ${process.env.NODE_ENV} on ${PORT}`)
)

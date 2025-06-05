import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";

const app = express();
const port = process.env.PORT || 5002;

connectDB() // connection to the database
connectCloudinary()// set of claodinary for image storage

// middleware
app.use(express.json());
app.use(cors());

//define API routes
app.use('/api/user',userRouter)// routes for user-related operations
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
//check api
app.get("/", (req, res) => {
  res.send("API successfully connected");
});

//Start the server
app.listen(port, () => console.log(`Server is running on PORT :${port}`));

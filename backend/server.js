import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

const app = express();
const port = process.env.PORT || 5002;

connectDB() // connection to the database
connectCloudinary()// set of claodinary for image storage

// middleware
app.use(express.json());
app.use(cors());

//check api
app.get("/", (req, res) => {
  res.send("API successfully connected");
});

//Start the server
app.listen(port, () => console.log(`Server is running on PORT :${port}`));

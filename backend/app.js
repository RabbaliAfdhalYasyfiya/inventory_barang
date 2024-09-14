import express from "express";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./routes/index.js";
import db from "./config/database.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";

dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("Database Connection...");
  // await User.sync();
  // await Product.sync();
} catch (error) {
  console.log(error);
}

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(fileUpload());
app.use(cookieParser());
app.use(express.static("public"));
app.use(router);

app.listen(process.env.PORT, () =>
  console.log("Server Up and Running at port 5000 ...")
);

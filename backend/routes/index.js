import express from "express";
import {
  getProduct,
  getProductById,
  saveProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

import {
  getUser,
  Register,
  Login,
  Logout,
} from "../controllers/userController.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { refreshToken } from "../controllers/refreshToken.js";

const router = express.Router();

router.get("/products", getProduct);
router.get("/products/:id", getProductById);
router.post("/products", saveProduct);
router.patch("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

router.get("/users", verifyToken, getUser);
router.post("/users", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

export default router;

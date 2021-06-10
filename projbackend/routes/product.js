const express = require("express");
const router = express.Router();

const { isSignedIn, isAdmin, isAuthenticated } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

const { getProductById, createProduct } = require("../controllers/product");

// all params
router.param("userId", getUserById);
router.param("productId", getProductById);

// actual routes
router.post(
  "/product/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createProduct
);

module.exports = router;

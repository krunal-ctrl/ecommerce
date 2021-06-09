const express = require("express");
const router = express.Router();

const { isSignedIn, isAdmin, isAuthenticated } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

const { getProductById } = require("../controllers/product");

// all params
router.param("userId", getUserById);
router.param("productId", getProductById);

// actual routes

module.exports = router;

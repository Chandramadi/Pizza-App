const express = require("express");
const { authController }= require("../controllers/authController");

const authRoute = express.Router();

authRoute.post("/login",authController);

module.exports = {
    authRoute,
}
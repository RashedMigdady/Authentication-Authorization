const express = require("express");
const { getUserInfo } = require("../controllers/userInfo");
const authentication = require("../middleware/authentication");

const userInfoRouter = express.Router();

userInfoRouter.get('/', authentication , getUserInfo);

module.exports = userInfoRouter
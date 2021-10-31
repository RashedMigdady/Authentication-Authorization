const express = require("express");
const { login } = require("../controllers/auth/login");

const LoginRouter = express.Router();

LoginRouter.post('/' , login);

module.exports = LoginRouter;
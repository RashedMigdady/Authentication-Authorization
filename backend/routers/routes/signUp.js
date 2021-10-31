const express = require("express");
const { signUp } = require("../controllers/auth/signUp");

const RegisterRouter = express.Router();

RegisterRouter.post('/' , signUp);

module.exports = RegisterRouter;
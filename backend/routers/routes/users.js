const express = require("express");
const getAllUsers = require("../controllers/users");
const authentication = require("../middleware/authentication");

const usersRouter = express.Router();

usersRouter.get('/' ,getAllUsers);

module.exports = usersRouter;
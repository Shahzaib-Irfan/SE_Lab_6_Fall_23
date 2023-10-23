const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const { validateToken } = require("../utils/authorizationMiddleware");

router.get("/login", loginController.login);

module.exports = router;

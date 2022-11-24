"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRoutes = void 0;
var _express = require("express");
var _AuthenticateUserController = require("../../../../modules/Users/useCases/AuthenticateUser/AuthenticateUserController");
var _CreateUserController = require("../../../../modules/Users/useCases/CreateUser/CreateUserController");
var _ensureAdmin = require("../middlewares/ensureAdmin");
var _ensureAuthenticate = require("../middlewares/ensureAuthenticate");
const userRoutes = (0, _express.Router)();
exports.userRoutes = userRoutes;
const createUserController = new _CreateUserController.CreateUserController();
const authenticateUserController = new _AuthenticateUserController.AuthenticateUserController();
userRoutes.post("/", createUserController.handle);
userRoutes.post("/login", authenticateUserController.handle);
userRoutes.post("/auth", _ensureAuthenticate.ensureAuthenticated, _ensureAdmin.ensureAdmin, (req, res) => {
  console.time();
  res.json({
    message: "You're authenticated and admin"
  });
  console.timeEnd();
});
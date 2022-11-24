"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureAuthenticated = ensureAuthenticated;
var _jsonwebtoken = require("jsonwebtoken");
function ensureAuthenticated(req, res, next) {
  const authToken = req.headers.authorization;
  if (!authToken) {
    return res.status(401).json({
      message: "Token is missing!"
    });
  }
  const [, token] = authToken.split(" ");
  try {
    const {
      sub: user_id
    } = (0, _jsonwebtoken.verify)(token, "331fa444-1f2e-49c4-a31e-239e25056ab7");
    req.user = {
      id: user_id
    };
    return next();
  } catch (err) {
    return res.status(401).json({
      message: "Token invalid"
    });
  }
}
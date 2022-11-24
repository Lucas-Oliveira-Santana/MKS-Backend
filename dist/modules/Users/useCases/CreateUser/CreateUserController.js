"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserController = void 0;
var _tsyringe = require("tsyringe");
var _CreateUserUseCase = require("./CreateUserUseCase");
class CreateUserController {
  async handle(req, res) {
    const {
      email,
      password,
      isAdmin
    } = req.body;
    const createUserUseCase = _tsyringe.container.resolve(_CreateUserUseCase.CreateUserUseCase);
    const user = await createUserUseCase.execute({
      email,
      password,
      isAdmin
    });
    return res.status(201).json(user);
  }
}
exports.CreateUserController = CreateUserController;
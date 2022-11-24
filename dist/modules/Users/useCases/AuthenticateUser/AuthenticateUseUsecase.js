"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthenticateUserUseCase = void 0;
var _AppError = require("../../../../shared/errors/AppError");
var _tsyringe = require("tsyringe");
var _IUsersRepository = require("../../repositories/IUsersRepository");
var _bcryptjs = require("bcryptjs");
var _jsonwebtoken = require("jsonwebtoken");
var _dec, _dec2, _dec3, _dec4, _class;
let AuthenticateUserUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("UsersRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.IUsersRepository === "undefined" ? Object : _IUsersRepository.IUsersRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class AuthenticateUserUseCase {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute({
    email,
    password
  }) {
    const userExists = await this.usersRepository.findByEmail(email);
    if (!userExists) {
      throw new _AppError.AppError("Email or password incorrect");
    }
    const passwordMatch = await (0, _bcryptjs.compare)(password, userExists.password);
    if (!passwordMatch) {
      throw new _AppError.AppError("Email or password incorrect");
    }
    const token = (0, _jsonwebtoken.sign)({}, "331fa444-1f2e-49c4-a31e-239e25056ab7", {
      subject: userExists.id
    });
    return {
      token
    };
  }
}) || _class) || _class) || _class) || _class);
exports.AuthenticateUserUseCase = AuthenticateUserUseCase;
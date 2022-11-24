"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListMoviesUseCase = void 0;
var _tsyringe = require("tsyringe");
var _IMoviesRepository = require("../../repositories/IMoviesRepository");
var _dec, _dec2, _dec3, _dec4, _class;
let ListMoviesUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("MoviesRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IMoviesRepository.IMoviesRepository === "undefined" ? Object : _IMoviesRepository.IMoviesRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ListMoviesUseCase {
  constructor(moviesRepository) {
    this.moviesRepository = moviesRepository;
  }
  async execute() {
    const movies = await this.moviesRepository.findAll();
    return movies;
  }
}) || _class) || _class) || _class) || _class);
exports.ListMoviesUseCase = ListMoviesUseCase;
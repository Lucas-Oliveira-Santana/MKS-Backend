"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteMovieUseCase = void 0;
var _AppError = require("../../../../shared/errors/AppError");
var _tsyringe = require("tsyringe");
var _IMoviesRepository = require("../../repositories/IMoviesRepository");
var _dec, _dec2, _dec3, _dec4, _class;
let DeleteMovieUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("MoviesRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IMoviesRepository.IMoviesRepository === "undefined" ? Object : _IMoviesRepository.IMoviesRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class DeleteMovieUseCase {
  constructor(moviesRepository) {
    this.moviesRepository = moviesRepository;
  }
  async execute(title) {
    const movie = await this.moviesRepository.findByTitle(title);
    if (!movie) {
      throw new _AppError.AppError("Movie not found");
    }
    await this.moviesRepository.deleteMovie(movie.id);
  }
}) || _class) || _class) || _class) || _class);
exports.DeleteMovieUseCase = DeleteMovieUseCase;
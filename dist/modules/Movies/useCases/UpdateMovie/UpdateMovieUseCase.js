"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateMovieUseCase = void 0;
var _AppError = require("../../../../shared/errors/AppError");
var _tsyringe = require("tsyringe");
var _IMoviesRepository = require("../../repositories/IMoviesRepository");
var _Movie = require("../../infra/typeorm/entities/Movie");
var _typeorm = require("typeorm");
var _dec, _dec2, _dec3, _dec4, _class;
let UpdateMovieUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("MoviesRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IMoviesRepository.IMoviesRepository === "undefined" ? Object : _IMoviesRepository.IMoviesRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class UpdateMovieUseCase {
  constructor(moviesRepository) {
    this.moviesRepository = moviesRepository;
  }
  async execute({
    id,
    description,
    title
  }) {
    const repo = (0, _typeorm.getRepository)(_Movie.Movie);
    const movie = await this.moviesRepository.findById(id);
    if (!movie) {
      throw new _AppError.AppError("Movie not found");
    }
    const titleUpper = title.toUpperCase();
    movie.description = description ? description : movie.description;
    movie.title = title ? titleUpper : movie.title;
    await repo.save(movie);
    return movie;
  }
}) || _class) || _class) || _class) || _class);
exports.UpdateMovieUseCase = UpdateMovieUseCase;
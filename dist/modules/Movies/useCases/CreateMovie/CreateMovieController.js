"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateMovieController = void 0;
var _tsyringe = require("tsyringe");
var _CreateMovieUseCase = require("./CreateMovieUseCase");
class CreateMovieController {
  async handle(req, res) {
    const {
      title,
      description,
      released
    } = req.body;
    const createMovieUseCase = _tsyringe.container.resolve(_CreateMovieUseCase.CreateMovieUseCase);
    const movie = await createMovieUseCase.execute({
      title,
      description,
      released
    });
    return res.status(201).json(movie);
  }
}
exports.CreateMovieController = CreateMovieController;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateMovieController = void 0;
var _tsyringe = require("tsyringe");
var _UpdateMovieUseCase = require("./UpdateMovieUseCase");
class UpdateMovieController {
  async handle(req, res) {
    const {
      id,
      description,
      title
    } = req.body;
    const updateMovieUseCase = _tsyringe.container.resolve(_UpdateMovieUseCase.UpdateMovieUseCase);
    const movie = await updateMovieUseCase.execute({
      id,
      description,
      title
    });
    return res.status(201).json(movie);
  }
}
exports.UpdateMovieController = UpdateMovieController;
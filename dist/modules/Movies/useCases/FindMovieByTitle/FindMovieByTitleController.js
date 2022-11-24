"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FindMovieByTitleController = void 0;
var _tsyringe = require("tsyringe");
var _FindMovieByTitleUseCase = require("./FindMovieByTitleUseCase");
class FindMovieByTitleController {
  async handle(req, res) {
    const {
      title
    } = req.params;
    const findMovieByTitleUseCase = _tsyringe.container.resolve(_FindMovieByTitleUseCase.FindMovieByTitleUseCase);
    const movie = await findMovieByTitleUseCase.execute(title);
    return res.status(200).json(movie);
  }
}
exports.FindMovieByTitleController = FindMovieByTitleController;
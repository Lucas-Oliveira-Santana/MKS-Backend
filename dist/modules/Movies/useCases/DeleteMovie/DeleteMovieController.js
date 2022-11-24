"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteMovieController = void 0;
var _tsyringe = require("tsyringe");
var _DeleteMovieUseCase = require("./DeleteMovieUseCase");
class DeleteMovieController {
  async handle(req, res) {
    const {
      title
    } = req.body;
    const titleUpper = title.toUpperCase();
    const deleteMovieUseCase = _tsyringe.container.resolve(_DeleteMovieUseCase.DeleteMovieUseCase);
    await deleteMovieUseCase.execute(titleUpper);
    return res.status(200).send();
  }
}
exports.DeleteMovieController = DeleteMovieController;
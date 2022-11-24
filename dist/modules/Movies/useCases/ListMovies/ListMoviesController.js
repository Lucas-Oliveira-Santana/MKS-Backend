"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListMoviesController = void 0;
var _tsyringe = require("tsyringe");
var _ListMoviesUseCase = require("./ListMoviesUseCase");
class ListMoviesController {
  async handle(req, res) {
    const listMoviesUseCase = _tsyringe.container.resolve(_ListMoviesUseCase.ListMoviesUseCase);
    const movies = await listMoviesUseCase.execute();
    return res.status(201).json(movies);
  }
}
exports.ListMoviesController = ListMoviesController;
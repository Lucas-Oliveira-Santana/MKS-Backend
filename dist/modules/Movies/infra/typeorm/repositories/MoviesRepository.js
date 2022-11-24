"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoviesRepository = void 0;
var _typeorm = require("typeorm");
var _Movie = require("../entities/Movie");
class MoviesRepository {
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_Movie.Movie);
  }
  async create({
    title,
    description,
    released
  }) {
    const movie = this.repository.create({
      title,
      description,
      released
    });
    await this.repository.save(movie);
    return movie;
  }
  async findByTitle(title) {
    const movie = await this.repository.findOne({
      title
    });
    return movie;
  }
  async findAll() {
    const movies = this.repository.find();
    return movies;
  }
  async deleteMovie(id) {
    await this.repository.delete(id);
  }
  async findById(id) {
    const movie = await this.repository.findOne(id);
    return movie;
  }
}
exports.MoviesRepository = MoviesRepository;
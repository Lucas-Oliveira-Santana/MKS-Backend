"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.movieRoutes = void 0;
var _express = require("express");
var _ListMoviesController = require("../../../../modules/Movies/useCases/ListMovies/ListMoviesController");
var _CreateMovieController = require("../../../../modules/Movies/useCases/CreateMovie/CreateMovieController");
var _FindMovieByTitleController = require("../../../../modules/Movies/useCases/FindMovieByTitle/FindMovieByTitleController");
var _DeleteMovieController = require("../../../../modules/Movies/useCases/DeleteMovie/DeleteMovieController");
var _UpdateMovieController = require("../../../../modules/Movies/useCases/UpdateMovie/UpdateMovieController");
var _ensureAuthenticate = require("../middlewares/ensureAuthenticate");
var _ensureAdmin = require("../middlewares/ensureAdmin");
const movieRoutes = (0, _express.Router)();
exports.movieRoutes = movieRoutes;
const createMovieController = new _CreateMovieController.CreateMovieController();
const listMoviesController = new _ListMoviesController.ListMoviesController();
const findMovieByTitleController = new _FindMovieByTitleController.FindMovieByTitleController();
const deleteMovieController = new _DeleteMovieController.DeleteMovieController();
const updateMovieController = new _UpdateMovieController.UpdateMovieController();
movieRoutes.get("/", _ensureAuthenticate.ensureAuthenticated, _ensureAdmin.ensureAdmin, listMoviesController.handle);
movieRoutes.get("/:title", _ensureAuthenticate.ensureAuthenticated, _ensureAdmin.ensureAdmin, findMovieByTitleController.handle);
movieRoutes.post("/create", _ensureAuthenticate.ensureAuthenticated, _ensureAdmin.ensureAdmin, createMovieController.handle);
movieRoutes.post("/delete", _ensureAuthenticate.ensureAuthenticated, _ensureAdmin.ensureAdmin, deleteMovieController.handle);
movieRoutes.post("/update", _ensureAuthenticate.ensureAuthenticated, _ensureAdmin.ensureAdmin, updateMovieController.handle);
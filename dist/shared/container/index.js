"use strict";

require("reflect-metadata");
var _tsyringe = require("tsyringe");
var _UsersRepository = require("../../modules/Users/infra/typeorm/repositories/UsersRepository");
var _MoviesRepository = require("../../modules/Movies/infra/typeorm/repositories/MoviesRepository");
_tsyringe.container.registerSingleton("MoviesRepository", _MoviesRepository.MoviesRepository);
_tsyringe.container.registerSingleton("UsersRepository", _UsersRepository.UsersRepository);
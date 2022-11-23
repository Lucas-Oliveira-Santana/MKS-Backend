import "reflect-metadata"
import { IUsersRepository } from "../../modules/Users/repositories/IUsersRepository"
import { container } from "tsyringe"
import { UsersRepository } from "../../modules/Users/infra/typeorm/repositories/UsersRepository"
import { IMoviesRepository } from "../../modules/Movies/repositories/IMoviesRepository"
import { MoviesRepository } from "../../modules/Movies/infra/typeorm/repositories/MoviesRepository"




container.registerSingleton<IMoviesRepository>(
  "MoviesRepository",MoviesRepository
)


container.registerSingleton<IUsersRepository>(
  "UsersRepository",UsersRepository
)
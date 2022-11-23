import { ICreateMovieDTO } from "../dtos/ICreateMovie";
import { Movie } from "../infra/typeorm/entities/Movie";


interface IMoviesRepository{
  create({title,description,released}:ICreateMovieDTO):Promise<Movie>;
  findByTitle(title:string):Promise<Movie>;
  findById(id:string):Promise<Movie>;
  findAll():Promise<Movie[]>;
  deleteMovie(id:string):Promise<void>;
}

export {IMoviesRepository}
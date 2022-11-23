import { ICreateMovieDTO } from "src/modules/Movies/dtos/ICreateMovie";
import { getRepository, Repository } from "typeorm";
import { IMoviesRepository } from "../../../repositories/IMoviesRepository";
import { Movie } from "../entities/Movie";

interface IUpdateMovie{
  id: string;
  title: string;
  description: string;
}

class MoviesRepository implements IMoviesRepository{

  private repository: Repository<Movie>

  constructor(){
    this.repository = getRepository(Movie)
  }
 
  async create({ title, description, released }: ICreateMovieDTO): Promise<Movie> {
   const movie = this.repository.create({title, description, released})

   await this.repository.save(movie)

   return movie
  }
  async findByTitle(title: string): Promise<Movie> {
    const movie = await this.repository.findOne({title})

    return movie
  }
  async findAll(): Promise<Movie[]> {
    const movies = this.repository.find()

    return movies
  }
  async deleteMovie(id: string): Promise<void> {
    await this.repository.delete(id)
  }

  async findById(id: string): Promise<Movie> {
   const movie = await this.repository.findOne(id)

   return movie
  }
 

  }


export {MoviesRepository}
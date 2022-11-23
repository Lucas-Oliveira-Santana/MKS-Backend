import { AppError } from "../../../../shared/errors/AppError"
import { inject, injectable } from "tsyringe"
import { IMoviesRepository } from "../../repositories/IMoviesRepository"
import { Movie } from "../../infra/typeorm/entities/Movie";
import { getRepository } from "typeorm";

interface IRequest{
  id: string;
  title: string;
  description: string;
}

@injectable()
class UpdateMovieUseCase{

  constructor(
    @inject("MoviesRepository")
    private moviesRepository: IMoviesRepository
  ){}

  async execute({id,description,title}:IRequest){
    const repo = getRepository(Movie)
    const movie = await this.moviesRepository.findById(id)

    if(!movie){
      throw new AppError("Movie not found")
    }

    const titleUpper = title.toUpperCase()

    movie.description = description ? description : movie.description
    movie.title = title ? titleUpper : movie.title

    await repo.save(movie)

    return movie
  }
}


export {UpdateMovieUseCase}
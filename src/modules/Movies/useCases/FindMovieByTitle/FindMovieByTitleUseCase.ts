import { AppError } from "../../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { Movie } from "../../infra/typeorm/entities/Movie";
import { IMoviesRepository } from "../../repositories/IMoviesRepository";

@injectable()
class FindMovieByTitleUseCase{
  
  constructor(
    @inject("MoviesRepository")
    private moviesRepository: IMoviesRepository
  ){}

    async execute(title: string): Promise<Movie>{

      const titleUpper = title.toUpperCase()

      const movie = await this.moviesRepository.findByTitle(titleUpper)

      if(!movie){
        throw new AppError("Movie not found")
      }

      return movie
    }
}



export{FindMovieByTitleUseCase}
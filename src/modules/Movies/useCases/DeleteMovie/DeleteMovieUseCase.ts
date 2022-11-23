import { AppError } from "../../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe"
import { IMoviesRepository } from "../../repositories/IMoviesRepository"

@injectable()
class DeleteMovieUseCase{

  constructor(
    @inject("MoviesRepository")
    private moviesRepository: IMoviesRepository
  ){}

    async execute(title: string): Promise<void>{
      const movie = await this.moviesRepository.findByTitle(title);

      if(!movie){
        throw new AppError("Movie not found")
      }
     

      await this.moviesRepository.deleteMovie(movie.id)
    }
  
}

export {DeleteMovieUseCase}
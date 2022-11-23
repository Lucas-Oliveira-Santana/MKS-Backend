import { AppError } from "../../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { ICreateMovieDTO } from "../../dtos/ICreateMovie";
import { IMoviesRepository } from "../../repositories/IMoviesRepository";

@injectable()
class CreateMovieUseCase{

  constructor(
    @inject("MoviesRepository")
    private moviesRepository: IMoviesRepository
  ){
  
  }

  async execute({title,description,released}:ICreateMovieDTO){
    const titleUpper = title.toUpperCase()

    const movieAlreadyExists = await this.moviesRepository.findByTitle(titleUpper)
    
    if(movieAlreadyExists){
      throw new AppError("Movie already exists")
    }


    const movie = await this.moviesRepository.create({title:titleUpper,description,released})

    return movie
  }
}

export {CreateMovieUseCase}
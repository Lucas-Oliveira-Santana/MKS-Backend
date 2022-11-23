import { inject, injectable } from "tsyringe";
import { IMoviesRepository } from "../../repositories/IMoviesRepository";

@injectable()
class ListMoviesUseCase{
  constructor(
    @inject("MoviesRepository")
    private moviesRepository: IMoviesRepository
  ){
  
  }
  async execute(){
    const movies = await this.moviesRepository.findAll()

    return movies
  }
}

export {ListMoviesUseCase}
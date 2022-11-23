import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindMovieByTitleUseCase } from "./FindMovieByTitleUseCase";



class FindMovieByTitleController{

  async handle(req: Request, res: Response):Promise<Response>{
    const {title} = req.params

    const findMovieByTitleUseCase = container.resolve(FindMovieByTitleUseCase)

    const movie = await findMovieByTitleUseCase.execute(title)

    return res.status(200).json(movie)
  }
}



export{FindMovieByTitleController}
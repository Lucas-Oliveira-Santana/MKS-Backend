import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateMovieUseCase } from "./CreateMovieUseCase";



class CreateMovieController{

  async handle(req: Request, res: Response):Promise<Response>{
    const {title,description,released} = req.body

    const createMovieUseCase = container.resolve(CreateMovieUseCase)

    const movie = await createMovieUseCase.execute({title,description,released})

    return res.status(201).json(movie)
  }
}

export{CreateMovieController}
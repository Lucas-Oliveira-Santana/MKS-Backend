import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateMovieUseCase } from "./UpdateMovieUseCase";



class UpdateMovieController{
  async handle(req: Request, res: Response):Promise<Response>{

    const {id,description,title} = req.body

    const updateMovieUseCase = container.resolve(UpdateMovieUseCase)

    const movie = await updateMovieUseCase.execute({id,description,title})

    return res.status(201).json(movie)
  
  }
}


export {UpdateMovieController}
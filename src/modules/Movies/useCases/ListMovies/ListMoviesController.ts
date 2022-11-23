import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListMoviesUseCase } from "./ListMoviesUseCase";


class ListMoviesController{
  async handle(req: Request, res: Response):Promise<Response>{

    const listMoviesUseCase = container.resolve(ListMoviesUseCase)

    const movies = await listMoviesUseCase.execute()

    return res.status(201).json(movies)
  }
}


export {ListMoviesController}
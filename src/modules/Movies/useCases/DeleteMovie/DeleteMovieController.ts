import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteMovieUseCase } from "./DeleteMovieUseCase";



class DeleteMovieController{
  async handle(req: Request, res: Response):Promise<Response>{
    const {title}= req.body

    const titleUpper = title.toUpperCase()

    const deleteMovieUseCase = container.resolve(DeleteMovieUseCase)

    await deleteMovieUseCase.execute(titleUpper)

    return res.status(200).send()
  }
}

export {DeleteMovieController}
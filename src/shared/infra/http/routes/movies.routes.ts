import { Request, Response, Router } from "express";
import { ListMoviesController } from "../../../../modules/Movies/useCases/ListMovies/ListMoviesController";
import { CreateMovieController } from "../../../../modules/Movies/useCases/CreateMovie/CreateMovieController";
import { FindMovieByTitleController } from "../../../../modules/Movies/useCases/FindMovieByTitle/FindMovieByTitleController";
import { DeleteMovieController } from "../../../../modules/Movies/useCases/DeleteMovie/DeleteMovieController";
import { UpdateMovieController } from "../../../../modules/Movies/useCases/UpdateMovie/UpdateMovieController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";
import { ensureAdmin } from "../middlewares/ensureAdmin";


const movieRoutes = Router()

const createMovieController = new CreateMovieController()
const listMoviesController = new ListMoviesController()
const findMovieByTitleController = new FindMovieByTitleController()
const deleteMovieController = new DeleteMovieController()
const updateMovieController = new UpdateMovieController()

movieRoutes.get("/",ensureAuthenticated,ensureAdmin,listMoviesController.handle)
movieRoutes.get("/:title",ensureAuthenticated,ensureAdmin,findMovieByTitleController.handle)
movieRoutes.post("/create",ensureAuthenticated,ensureAdmin,createMovieController.handle)
movieRoutes.post("/delete",ensureAuthenticated,ensureAdmin,deleteMovieController.handle)
movieRoutes.post("/update",ensureAuthenticated,ensureAdmin,updateMovieController.handle)


export {movieRoutes}
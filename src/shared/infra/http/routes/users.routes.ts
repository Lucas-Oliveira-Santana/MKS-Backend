import { Request, Response, Router } from "express";
import { AuthenticateUserController } from "../../../../modules/Users/useCases/AuthenticateUser/AuthenticateUserController";
import { CreateUserController } from "../../../../modules/Users/useCases/CreateUser/CreateUserController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";

const userRoutes = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()

userRoutes.post("/",createUserController.handle)
userRoutes.post("/login",authenticateUserController.handle)
userRoutes.post("/auth",ensureAuthenticated,ensureAdmin,(req: Request, res: Response) => {
 
  console.time()
  res.json({message:"You're authenticated and admin"})
  console.timeEnd()
})

export{userRoutes}
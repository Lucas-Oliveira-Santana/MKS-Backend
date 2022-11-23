import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}


export function ensureAuthenticated(req: Request, res: Response,next: NextFunction){
  const authToken = req.headers.authorization

  if(!authToken){
    return res.status(401).json({
      message:"Token is missing!"
    })
  }

  const [,token] = authToken.split(" ")

  try{

    const {sub: user_id} =  verify(token,"331fa444-1f2e-49c4-a31e-239e25056ab7") as IPayload

    req.user = {
      id: user_id
    }

    return next()
  }catch(err){
    return res.status(401).json({
      message:"Token invalid"
    })
  }
}
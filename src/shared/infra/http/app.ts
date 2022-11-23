import "reflect-metadata"
import express, { NextFunction, Request, Response }  from "express";
import { createConnection } from "typeorm";
import "../../container/index"
import { AppError } from "../../errors/AppError";
import "express-async-errors"
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../../../swagger.json';

import { userRoutes } from "./routes/users.routes";
import { movieRoutes } from "./routes/movies.routes";

const app = express();
app.use(express.json());

createConnection()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));


app.use("/user",userRoutes)
app.use("/movies",movieRoutes)

app.use((err:Error, request:Request, response:Response,next:NextFunction)=>{
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            message: err.message
        })
    }
    
    return response.status(500).json({
        status:"error",
        message:`Internal server error - ${err.message}`
    })
  })


export {app}
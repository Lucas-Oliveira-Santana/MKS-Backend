import { AppError } from "../../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";


interface IRequest{
  email: string;
  password: string;
}


@injectable()
class AuthenticateUserUseCase{
  constructor(
    @inject("UsersRepository")
    private usersRepository:IUsersRepository
  ){}

  async execute({ email, password }:IRequest){
    const userExists = await this.usersRepository.findByEmail(email);

    if(!userExists){
      throw new AppError("Email or password incorrect")
    }

    const passwordMatch = await compare(password,userExists.password)

    if(!passwordMatch){
      throw new AppError("Email or password incorrect")
    }

    const token = sign({},"331fa444-1f2e-49c4-a31e-239e25056ab7",{
      subject:userExists.id
    })

    return {token}
  }
}

export{AuthenticateUserUseCase}
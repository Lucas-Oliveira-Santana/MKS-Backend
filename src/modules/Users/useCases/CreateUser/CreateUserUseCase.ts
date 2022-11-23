import { AppError } from "../../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { hash } from "bcryptjs";
import { User } from "../../infra/typeorm/entities/User";



@injectable()
class CreateUserUseCase{
  constructor(
  @inject("UsersRepository")
  private usersRepository:IUsersRepository){}


  async execute({email, password,isAdmin}:ICreateUserDTO):Promise<User>{
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if(userAlreadyExists){
      throw new AppError("User already exists")
    }

    const passwordHash = await hash(password,8)

    const user = await this.usersRepository.create({
      email,isAdmin,password:passwordHash
    })

    return user
  }
}



export{CreateUserUseCase}
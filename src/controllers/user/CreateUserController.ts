import { Request, Response } from 'express'
import { CreateUserService } from "../../services/user/CreateUserService";

export class CreateUserController {
  constructor(private createUserService: CreateUserService) {}
  
  async handle(req: Request, res: Response) {
      const { body : { name, email, password, state, city, telephone, roleId }, userId } = req;

      const user = await this.createUserService.execute({
          name,
          email,
          password,
          state,
          city,
          telephone,
          roleId,
          userId
      });

      return res.json(user).status(201)
  }
}
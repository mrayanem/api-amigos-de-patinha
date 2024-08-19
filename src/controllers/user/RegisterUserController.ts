import { Request, Response } from 'express'
import { CreateUserService } from "../../services/user/CreateUserService";

export class RegisterUserController {
  constructor(private createUserService: CreateUserService) {}
  
  async handle(req: Request, res: Response) {
      const { name, email, password, state, city, telephone } = req.body;

      const user = await this.createUserService.execute({
          name,
          email,
          password,
          state,
          city,
          telephone
      });

      return res.json(user).status(201)
  }
}
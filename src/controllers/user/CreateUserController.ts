import { Request, Response } from 'express'
import { CreateUserService } from "../../services/user/CreateUserService";
import { validationResult } from 'express-validator';

export class CreateUserController {
  constructor(private createUserService: CreateUserService) {}
  
  async handle(req: Request, res: Response) {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

      const { body : { name, email, password, state, city, telephone, roleId, status }, userId } = req;

      const user = await this.createUserService.execute({
          name,
          email,
          password,
          state,
          city,
          telephone,
          roleId,
          userId,
          status
      });

      return res.json(user).status(201)
  }
}
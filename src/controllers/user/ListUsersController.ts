import { Request, Response } from 'express'
import { ListUsersService } from "../../services/user/ListUsersService";

export class ListUsersController {
  constructor(private listUsersService: ListUsersService) {}
  
  async handle(req: Request, res: Response) {

      const users = await this.listUsersService.execute();

      try {
          return res.json(users);
      } catch {
          return res.status(400)
      }
  }
}
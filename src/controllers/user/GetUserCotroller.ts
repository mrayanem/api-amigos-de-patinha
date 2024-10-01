import { Request, Response } from 'express'
import { GetUserService } from "../../services/user/GetUserService";

export class GetUserController {
  constructor(private getUserService: GetUserService) {}
  
  async handle(req: Request, res: Response) {
      const id = req?.params?.id

      if (!id) {
        throw new Error('Id do usuario é obrigatório')
      }

      const users = await this.getUserService.execute(id);

      try {
          return res.json(users);
      } catch {
          return res.status(400)
      }
  }
}
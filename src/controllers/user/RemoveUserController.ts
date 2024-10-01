import { Request, Response } from 'express'
import { RemoveUserService } from "../../services/user/RemoveUserService";

export class RemoveUserController {
  constructor(private removeUserService: RemoveUserService) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;

    if (!id) {
        return res.status(400)
    }

    try {
        await this.removeUserService.execute(id)

        return res.status(204).send()
    } catch (error) {
        return res.status(400).send()
    }
}

}
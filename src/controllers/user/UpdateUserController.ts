import { Request, Response } from 'express'
import { UpdateUserService } from '../../services/user/UpdateUserService';

export class UpdateUserController {
  constructor(private updateUserService: UpdateUserService) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const { name, email, password, cep, telephone } = req.body;

    if (!id) {
        return res.status(400)
    }

    const newId = parseInt(id)

    try {
        const user = await this.updateUserService.execute(newId, { name, email, password, cep, telephone })

        return res.json(user).status(200)
    } catch (error) {
        return res.status(400).send()
    }
}

}
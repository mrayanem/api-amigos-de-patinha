import { Request, Response } from 'express';
import { UpdateUserService } from '../../services/user/UpdateUserService';

export class UpdateUserController {
  constructor(private updateUserService: UpdateUserService) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, password, cep, telephone } = req.body;

    if (!id) {
      return res.status(400).json({ error: 'ID is required' });
    }

    try {
      const user = await this.updateUserService.execute(id, { name, email, password, cep, telephone });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: 'Error updating user', details: error });
    }
  }
}

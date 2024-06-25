import { Request, Response } from 'express';
import { CreateSpecieService } from '../../services/specie/CreateSpecieService';

export class CreateSpecieController {
  constructor(private createSpecieService: CreateSpecieService) {}

  async handle(req: Request, res: Response) {
    const { name } = req.body;

    try {
      const specie = await this.createSpecieService.execute({ name });
      return res.json(specie);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

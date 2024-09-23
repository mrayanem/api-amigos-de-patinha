import { Request, Response } from 'express'
import { RemoveAnimalService } from '../../services/animal/RemoveAnimalService';

export class RemoveAnimalController {
  constructor(private removeAnimalService: RemoveAnimalService) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;

    if (!id) {
        return res.status(400)
    }

    const newId = (id)

    try {
        await this.removeAnimalService.execute(newId)

        return res.status(204).send()
    } catch (error) {
        return res.status(400).send()
    }
}

}
import { Request, Response } from 'express'
import { GetAnimalService } from "../../services/animal/GetAnimalService";

export class GetAnimalController {
  constructor(private getAnimalService: GetAnimalService) {}
  
  async handle(req: Request, res: Response) {
      const id = req?.params?.id

      if (!id) {
        throw new Error('Id do animal é obrigatório')
      }

      const animals = await this.getAnimalService.execute(id);

      try {
          return res.json(animals);
      } catch {
          return res.status(400)
      }
  }
}
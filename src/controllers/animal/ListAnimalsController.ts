import { Request, Response } from 'express'
import { ListAnimalsService } from '../../services/animal/ListAnimalService';

export class ListAnimalsController {
  constructor(private listAnimalsService: ListAnimalsService) {}
  
  async handle(req: Request, res: Response) {

      const animals = await this.listAnimalsService.execute();

      try {
          return res.json(animals);
      } catch {
          return res.status(400)
      }
  }
}
import { Request, Response } from 'express'
import { ListUserAnimalsService } from '@services/animal/ListUserAnimalService';

export class ListUserAnimalsController {
  constructor(private listUserAnimalsService: ListUserAnimalsService) {}
  
  async handle(req: Request, res: Response) {
      console.log(req.params)
      const animals = await this.listUserAnimalsService.execute(req);
      console.log(animals)      
      try {
          return res.json(animals).status(200);
      } catch {
          return res.status(400)
      }
  }
}
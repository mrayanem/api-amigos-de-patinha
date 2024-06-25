import { Request, Response } from 'express';
import { CreateAnimalService } from '../../services/animal/CreateAnimalService';

export class CreateAnimalController {
  constructor(private createAnimalService: CreateAnimalService) {}

  async handle(req: Request, res: Response) {
    const { userId, name, sexo, age, animalSize, specieId, state, city, description, photoAnimal } = req.body;

    try {
      const animal = await this.createAnimalService.execute({
        userId,
        name,
        sexo,
        age,
        animalSize,
        specieId,
        state,
        city,
        description,
        photoAnimal,
      });

      return res.json(animal);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

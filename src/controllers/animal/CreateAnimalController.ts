import { Request, Response } from 'express';
import { CreateAnimalService } from '../../services/animal/CreateAnimalService';
import { validationResult } from 'express-validator';

export class CreateAnimalController {
  constructor(private createAnimalService: CreateAnimalService) {}

  async handle(req: Request, res: Response) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }

      const { userId, body: { name, sex, age, animalSize, specie, state, city, description, livesWellIn, sociableWith, vetCare, photoAnimal, status } } = req;

      const animal = await this.createAnimalService.execute({
        userId,
        name,
        sex,
        age,
        animalSize,
        specie,
        state,
        city,
        description,
        livesWellIn,
        sociableWith,
        vetCare,
        photoAnimal,
        status
      });

      return res.json(animal);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

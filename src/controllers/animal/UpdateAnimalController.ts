import { Request, Response } from 'express'
import { UpdateAnimalsService } from '../../services/animal/UpdateAnimalService';
import { parse } from 'uuid';

export class UpdateAnimalController {
  constructor(private updateAnimalsService: UpdateAnimalsService) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const { userId, body: { name, sex, age, animalSize, specieId, state, city, description, photoAnimal, livesWellIn, sociableWith, vetCare, status } } = req.body;

    if (!id) {
        return res.status(400)
    }

    const newId = (id)

    try {
        const animal = await this.updateAnimalsService.execute(newId, { userId, name, sex, age, animalSize, specieId, state, city, description, photoAnimal, livesWellIn, sociableWith, vetCare, status })

        return res.json(animal).status(200)
    } catch (error) {
        return res.status(400).send()
    }
}

}
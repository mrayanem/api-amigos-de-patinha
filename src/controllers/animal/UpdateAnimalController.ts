import { Request, Response } from 'express'
import { UpdateAnimalsService } from '../../services/animal/UpdateAnimalService';

export class UpdateAnimalController {
  constructor(private updateAnimalsService: UpdateAnimalsService) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const { userId, name, sexo, age, animalSize, specieId, state, city, description, photoAnimal } = req.body;

    if (!id) {
        return res.status(400)
    }

    const newId = parseInt(id)

    try {
        const animal = await this.updateAnimalsService.execute(newId, { userId, name, sexo, age, animalSize, specieId, state, city, description, photoAnimal })

        return res.json(animal).status(200)
    } catch (error) {
        return res.status(400).send()
    }
}

}
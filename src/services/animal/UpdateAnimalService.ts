import prismaClient from "../../prisma";

interface AnimalRequest {
  userId?: number;
  name?: string;
  sexo?: string;
  age?: number;
  animalSize?: string;
  specieId?: number;
  state?: string;
  city?: string;
  description?: string;
  photoAnimal?: string;
}

export class UpdateAnimalsService {
  execute(animalId: number, animal: AnimalRequest) {
    return prismaClient.animal.update({
      data: {
        ...animal
      },
      where: {
        id: animalId
      }
    })
  }
}

import prismaClient from "../../prisma";

export class RemoveAnimalService {
  execute(animalId: number) {
    return prismaClient.animal.delete({
      where: {
        id: animalId
      }
    })
  }
}

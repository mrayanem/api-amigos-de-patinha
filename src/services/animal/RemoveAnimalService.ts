import prismaClient from "../../prisma";

export class RemoveAnimalService {
  execute(animalId: string) {
    return prismaClient.animal.delete({
      where: {
        id: animalId
      }
    })
  }
}

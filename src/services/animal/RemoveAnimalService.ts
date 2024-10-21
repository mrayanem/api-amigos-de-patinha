import prismaClient from "../../prisma";

export class RemoveAnimalService {
  execute(animalId: string) {
    return prismaClient.animal.update({
      where: {
        id: animalId,
      },
      data: {
        status: false,
      },
    });
  }
}

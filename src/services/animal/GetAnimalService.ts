import prismaClient from '../../prisma'; 

export class GetAnimalService {
  async execute(animalId: string) {
    const animal = await prismaClient.animal.findUnique({
      where: {
        id: animalId, 
      },
      include: {
        user: true
      }
    });

    if (!animal) {
      throw new Error('Animal não encontrado');
    }

    return animal;
  }
}

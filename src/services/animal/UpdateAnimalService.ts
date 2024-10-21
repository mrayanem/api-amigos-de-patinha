import prismaClient from "../../prisma";

interface AnimalRequest {
  userId?: string;
  name?: string;
  sex?: 'MACHO' | 'FEMEA';
  age?: number;
  animalSize?: 'PEQUENO' | 'GRANDE' | 'MEDIO';
  specieId?: string;
  state?: string;
  city?: string;
  description?: string;
  photoAnimal?: string;
  status?: boolean; 
  livesWellIn?: 'APARTAMENTO' | 'CASA';
  sociableWith?: 'DESCONHECIDOS' | 'CRIANCAS' | 'OUTROS_ANIMAIS';
  vetCare?: 'CASTRADO' | 'VERMIFUGADO' | 'VACINADO';
}

export class UpdateAnimalsService {
  async execute(animalId: string, animal: AnimalRequest) {
    return prismaClient.animal.update({
      data: {
        ...animal,
      },
      where: {
        id: animalId,
      },
    });
  }
}

import prismaClient from "../../prisma";

interface AnimalRequest {
  userId: string;
  name: string;
  sex: 'MACHO'|'FEMEA';
  age: number;
  animalSize: 'PEQUENO'|'GRANDE'|'MEDIO';
  specieId: string;
  state: string;
  city: string;
  description: string;
  photoAnimal: string;
  livesWellIn: 'APARTAMENTO'|'CASA';
  sociableWith: 'DESCONHECIDOS'|'CRIANCAS'|'OUTROS_ANIMAIS';
  vetCare: 'CASTRADO'|'VERMIFUGADO'|'VACINADO'
}

export class CreateAnimalService {
  async execute({ userId, name, sex, age, animalSize, specieId, state, city, description, photoAnimal, livesWellIn, sociableWith, vetCare }: AnimalRequest) {

    // Verificar se a espécie está cadastrada
    const specieExists = await prismaClient.specie.findUnique({
    where: { id: specieId },
    });

    if (!specieExists) {
    throw new Error("Specie não cadastrada.");
  }

    // Verificar se as informações do animal são válidas
    if (!name || !sex || !age || !animalSize || !specieId || !state || !city || !description || !photoAnimal || !livesWellIn || !sociableWith || !vetCare) {
      throw new Error("Informações do animal inválidas.");
    }

    // Criar o animal
    const animal = await prismaClient.animal.create({
      data: {
        userId,
        name,
        sex,
        age,
        animalSize,
        specieId,
        state,
        city,
        description,
        photoAnimal,
        livesWellIn,
        sociableWith,
        vetCare,
      },
    });

    return animal;
  }
}


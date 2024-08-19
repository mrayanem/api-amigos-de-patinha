import prismaClient from "../../prisma";

interface AnimalRequest {
  userId: string;
  name: string;
  sex: string;
  age: number;
  animalSize: string;
  specieId: string;
  state: string;
  city: string;
  description: string;
  photoAnimal: string;
}

export class CreateAnimalService {
  async execute({ userId, name, sex, age, animalSize, specieId, state, city, description, photoAnimal }: AnimalRequest) {

    // Verificar se o usuário está cadastrado
    /* const userExists = await prismaClient.user.findUnique({
      where: { id: userId },
    });

    if (!userExists) {
      throw new Error("Usuário não cadastrado.");
    }
    */
    

    // Verificar se a espécie está cadastrada
    const specieExists = await prismaClient.specie.findUnique({
    where: { id: specieId },
    });

    if (!specieExists) {
    throw new Error("Specie não cadastrada.");
  }

    // Verificar se as informações do animal são válidas
    if (!name || !sex || !age || !animalSize || !specieId || !state || !city || !description || !photoAnimal) {
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
      },
    });

    return animal;
  }
}


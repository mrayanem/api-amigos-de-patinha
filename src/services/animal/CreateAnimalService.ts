import { utapi } from "uploadthing";
import prismaClient from "../../prisma";
import { Blob } from "buffer";
import { randomUUID } from "crypto";
import { UTFile } from "uploadthing/server";

interface AnimalRequest {
  userId: string;
  name: string;
  sex: 'MACHO'|'FEMEA';
  age: number;
  animalSize: 'PEQUENO'|'GRANDE'|'MEDIO';
  specie: 'GATO'|'CACHORRO';
  state: string;
  city: string;
  description: string;
  livesWellIn: 'APARTAMENTO'|'CASA';
  sociableWith: 'DESCONHECIDOS'|'CRIANCAS'|'OUTROS_ANIMAIS';
  vetCare: 'CASTRADO'|'VERMIFUGADO'|'VACINADO'
  photoAnimal: Express.Multer.File
}

export class CreateAnimalService {
  async execute({ userId, name, sex, age, animalSize, specie, state, city, description, livesWellIn, sociableWith, vetCare, photoAnimal }: AnimalRequest) {
    try {
      const photoAnimalId = randomUUID().toString();

      const animal = await prismaClient.animal.create({
        data: {
          userId,
          name,
          sex,
          age,
          animalSize,
          specie,
          state,
          city,
          description,
          photoAnimal: photoAnimalId,
          livesWellIn,
          sociableWith,
          vetCare,
        },
      });

      const uploadFile = new UTFile([new Blob([photoAnimal.buffer.buffer])], photoAnimal.originalname, { customId: photoAnimalId })

      const { data, error } = await utapi.uploadFiles(uploadFile)

      if(error){
        throw new Error("erro ao realizar upload do arquivo :" + error.message);
      }
     
      const animalUpdated = await prismaClient.animal.update({
        where: { id: animal.id },
        data: {
          photoAnimal: data.key
        }
      })


      return animalUpdated;
    } catch (e) {
      throw new Error("Ocorrreu um erro ao criar o animal:" + (e as Error).message);
    }
  }
}


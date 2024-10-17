import { utapi } from "uploadthing";
import prismaClient from "../../prisma";
import { Blob } from "buffer";
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
  photoAnimal: string;
  livesWellIn: 'APARTAMENTO'|'CASA';
  sociableWith: 'DESCONHECIDOS'|'CRIANCAS'|'OUTROS_ANIMAIS';
  vetCare: 'CASTRADO'|'VERMIFUGADO'|'VACINADO'
  file: Express.Multer.File
}

export class CreateAnimalService {
  async execute({ userId, name, sex, age, animalSize, specie, state, city, description, livesWellIn, sociableWith, vetCare, file }: AnimalRequest) {
      
      const blob = new Blob([file.buffer as Buffer]);
      const uploadFile = new File([blob], file.originalname)

      const { data, error } = await utapi.uploadFiles(uploadFile)

      if(error){
        throw new Error("Ocorrreu um erro ao realizar upload do arquivo :" + error.message);
      }

    // Criar o animal
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
        photoAnimal: data.url,
        livesWellIn,
        sociableWith,
        vetCare,
      },
    });

    return animal;
  }
}


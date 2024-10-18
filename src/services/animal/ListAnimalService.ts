import { utapi } from "uploadthing";
import prismaClient from "../../prisma";

export class ListAnimalsService{
  async execute(){
    const animals = await prismaClient.animal.findMany()

    const fileIds = animals.flatMap(a => a.photoAnimal);
    const files = await utapi.getFileUrls(fileIds);
    const animalsWithFile = animals.map(a => { return { ...a, photoAnimal: files.data.find(f => f.key === a.photoAnimal)?.url } })
    

    return animalsWithFile
  }
}
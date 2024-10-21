import { utapi } from "uploadthing";
import prismaClient from "../../prisma";
import { Request } from "express"

export class ListUserAnimalsService{
  async execute(req: Request){
    const { id } = req.params
    console.log(req.params)
    const animals = await prismaClient.animal.findMany({
      where: {
        userId: id
      }
    })

    const fileIds = animals.flatMap(a => a.photoAnimal);
    const files = await utapi.getFileUrls(fileIds);
    const animalsWithFile = animals.map(a => { return { ...a, photoAnimal: files.data.find(f => f.key === a.photoAnimal)?.url } })
    

    return animalsWithFile
  }
}
import prismaClient from "../../prisma";

export class ListAnimalsService{
  async execute(){
    const animals = await prismaClient.animal.findMany()

    return animals
  }
}
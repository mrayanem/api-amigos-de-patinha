import prismaClient from "../../prisma";

interface SpecieRequest {
  name: string;
}

export class CreateSpecieService {
  async execute({ name }: SpecieRequest) {
    // Verificar se o nome da espécie foi fornecido
    if (!name) {
      throw new Error("Nome da espécie é obrigatório.");
    }

    // Criar a espécie
    const specie = await prismaClient.specie.create({
      data: {
        name,
      },
    });

    return specie;
  }
}
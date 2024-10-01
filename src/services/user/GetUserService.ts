import prismaClient from '../../prisma'; 

export class GetUserService {
  async execute(userId: string) {
    const user = await prismaClient.user.findUnique({
      where: {
        id: userId, 
      },
    });

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    return user;
  }
}

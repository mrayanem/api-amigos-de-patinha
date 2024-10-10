import prismaClient from "../../prisma";

export class RemoveUserService {
  execute(userId: string) {
    return prismaClient.user.update({
      where: {
        id: userId,
      },
      data: {
        status: false,
      }
    })
  }
}

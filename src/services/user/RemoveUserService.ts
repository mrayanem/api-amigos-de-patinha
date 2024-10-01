import prismaClient from "../../prisma";

export class RemoveUserService {
  execute(userId: string) {
    return prismaClient.user.delete({
      where: {
        id: userId
      }
    })
  }
}

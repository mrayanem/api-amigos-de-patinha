import prismaClient from "../../prisma";

export class RemoveUserService {
  execute(userId: number) {
    return prismaClient.user.delete({
      where: {
        id: userId
      }
    })
  }
}

import prismaClient from "../../prisma";

interface UserRequest {
  name?: string;
  email?: string;
  password?: string;
  cep?: string;
  telephone?: string;
}

class UpdateUserService {
  execute(userId: number, user: UserRequest) {
    return prismaClient.user.update({
      data: {
        ...user
      },
      where: {
        id: userId
      }
    })
  }
}

export { UpdateUserService }
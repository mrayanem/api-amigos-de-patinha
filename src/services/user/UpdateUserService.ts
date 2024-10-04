import prismaClient from "../../prisma";

interface UserRequest {
  name?: string;
  email?: string;
  password?: string;
  cep?: string;
  telephone?: string;
}

export class UpdateUserService {
  async execute(userId: string, user: UserRequest) {
    try {
      const updatedUser = await prismaClient.user.update({
        data: {
          ...user
        },
        where: {
          id: userId
        }
      });

      return updatedUser;
    } catch (error: any) {
      throw new Error('Error updating user: ' + error.message);
    }
  }
}

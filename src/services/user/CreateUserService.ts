import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
  name: string;
  email: string;
  password: string;
  state: string;
  city: string;
  telephone: string;
  role?: string;
  userId?: string;
  status?: boolean;
}

export class CreateUserService {
  async execute({ name, email, password, state, city, telephone, role, userId, status = true }: UserRequest) {

    if (!email) {
      throw new Error("Email incorreto")
    }

    if (!telephone) {
      throw new Error("Telefone incorreto")
    }

    const userAlreadyExist = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })

    if (userAlreadyExist) {
      throw new Error("Usuário já existente")
    }

    const userWithSameTel = await prismaClient.user.findFirst({
      where: {
        telephone: telephone
      }
    });

    if (userWithSameTel) {
      throw new Error("Usuário com o este telephone já existente");
    }

    const passwordHash = await hash(password, 8)

    console.log(userId, role)
    const roleUser = userId && role ? role : "client"

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        state,
        city,
        telephone,
        password: passwordHash,
        role: roleUser as "client" | "admin",
        status
      },
      select: {
        id: true,
        name: true,
        email: true,
        state: true,
        city: true,
        telephone: true,
        status: true
      }
    })

    return user;
  }
}

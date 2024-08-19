import { is } from "@middlewares/permissions";
import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
  name: string;
  email: string;
  password: string;
  state: string;
  city: string;
  telephone: string;
  roleId?: string;
  userId?: string;
}

export class CreateUserService {
  async execute({ name, email, password, state, city, telephone, roleId, userId }: UserRequest) {

    //verificar se ele enviou um email
    if (!email) {
      throw new Error("Email incorreto")
    }

     // Verificar se o CPF é válido 
    // if (!cpf) {
    //   throw new Error("CPF incorreto")
    // }

    //Verificar número
    if (!telephone) {
      throw new Error("Telefone incorreto")
    }

    //verificar se esse email já está cadastrado na plataforma
    const userAlreadyExist = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })

    if (userAlreadyExist) {
      throw new Error("Usuário já existente")
    }

    // const userWithSameCPF = await prismaClient.user.findFirst({
    //   where: {
    //     cpf: cpf
    //   }
    // });

    // if (userWithSameCPF) {
    //   throw new Error("Usuário com o mesmo CPF já existente");
    // }

    const userWithSameTel = await prismaClient.user.findFirst({
      where: {
        telephone: telephone
      }
    });

    if (userWithSameTel) {
      throw new Error("Usuário com o este telephone já existente");
    }

    const passwordHash = await hash(password, 8)

    console.log(userId, roleId)
    const roleUser = await prismaClient.role.findFirst({
      where: userId && roleId ? { id: roleId } : { name: 'client' }
    })

    if (!roleUser?.id) {
      throw new Error("Perfil do usuario inexistente!");
    }

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        state,
        city,
        telephone,
        password: passwordHash,
        roleId: roleUser.id
      },
      select: {
        id: true,
        name: true,
        email: true,
        state: true,
        city: true,
        telephone: true,
      }
    })

    return user;
  }
}

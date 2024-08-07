import { NextFunction, Request, Response } from "express";
import prismaClient from "prisma";

export function is(rolesRoutes: string[]) {
  return async (request: Request, response: Response, next: NextFunction) => {
    const { userId } = request;

    const user = await prismaClient.user.findFirst({
      where: { id: userId },
      include: {
        role: true
      }
    });

    if (!user) {
      return response.status(400).json("User does not exists");
    }

    const roleExists = rolesRoutes.includes(user.role.name)

    if (!roleExists) {
      return response.status(401).end();
    }

    return next();
  };
}
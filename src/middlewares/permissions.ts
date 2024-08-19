import { NextFunction, Request, Response } from "express";
import prismaClient from "prisma";

export function is(rolesRoutes: string[]) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req;

    const user = await prismaClient.user.findFirst({
      where: { id: userId },
      include: {
        role: true
      }
    });

    if (!user) {
      return res.status(400).json("User does not exists");
    }

    const roleExists = rolesRoutes.includes(user.role.name)

    if (!roleExists) {
      return res.status(401).end();
    }

    return next();
  };
}
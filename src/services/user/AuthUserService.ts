import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken';

interface AuthRequest {
    email: string;
    password: string;
}

export class AuthUserService {
    async execute({ email, password }: AuthRequest) {

        const user = await prismaClient.user.findUnique({
            where: {
                email: email
            },
            include: {
                role: true
            }
        });

        if (!user) {
            throw new Error("Usuário ou senha incorreto");
        }

        if (!user.status) {
            throw new Error("Conta inativa. Entre em contato com o suporte.");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Usuário ou senha incorreto");
        }

        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) {
            throw new Error("JWT_SECRET não está definido");
        }


        const token = sign(
            {
                id: user.id,
                email: user.email,
                name: user.name
                
            },
            jwtSecret,
            {
                subject: user.id.toString(),
                expiresIn: '2 days'
            }
        );

        return {
            id: user.id,
            email: user.email,
            name: user.name,
            token: token,
            role: user.role.name
        };
    }
}
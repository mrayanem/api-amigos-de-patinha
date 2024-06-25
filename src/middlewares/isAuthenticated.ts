import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface PayLoad {
  sub: string;
}

export const isAuthenticated = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // Receber o token
    const authToken = req.headers.authorization

    if (!authToken) {
      return res.status(401).json({
        success: false,
        data: 'Token de autenticação é obrigatório'
      })
    }

    const [, token] = authToken.split(" ")

    console.log(token)

    // Obter o segredo do JWT
    const jwtSecret = process.env.JWT_SECRET
    if (!jwtSecret) {
      return res.status(500).json({
        success: false,
        data: 'JWT_SECRET não está definido'
      })
    }

    try {
      // Validar token
      const { sub } = verify(token, jwtSecret) as PayLoad

      console.log(sub)

      req.body.userId = parseInt(sub)

      return next()
    } catch (err) {
      return res.status(401).json({
        success: false,
        data: 'Token de autenticação inválido'
      })
    }
  }
}

import { Request, Response } from 'express'
import { AuthUserService } from '../../services/user/AuthUserService'

export class AuthUserController{
    constructor(private authUserService: AuthUserService) {}

    async handle(req: Request, res: Response){

        const { email, password } = req.body;

        const auth = await this.authUserService.execute({
            email,
            password
        })

        
        return res.json({ success: true, data: auth }).status(200);
    }
}

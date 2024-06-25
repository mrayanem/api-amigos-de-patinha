import { Request,Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

export class DetailUserConroller{
  async handle(req: Request, res:Response){
    const detailUserService = new DetailUserService()

    const user = await detailUserService.execute()

    return res.json(user)
  }
}
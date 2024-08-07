import { isAuthenticated } from "@middlewares/isAuthenticated"
import { CreateUserController } from "../controllers/user/CreateUserController"
import { ListUsersController } from "../controllers/user/ListUsersController"
import { RemoveUserController } from "../controllers/user/RemoveUserController"
import { UpdateUserController } from "../controllers/user/UpdateUserController"
import { CreateUserService } from "../services/user/CreateUserService"
import { ListUsersService } from "../services/user/ListUsersService"
import { RemoveUserService } from "../services/user/RemoveUserService"
import { UpdateUserService } from "../services/user/UpdateUserService"
import express, { Router, Request, Response } from "express"
import { AuthUserController } from "@controllers/user/AuthUserController"
import { AuthUserService } from "@services/user/AuthUserService"
import { is } from "@middlewares/permissions"

const userRoutes: Router = express.Router()

require('express-async-errors');

// --ROTAS USER CADASTRO
userRoutes
  .post('/users', isAuthenticated(), is(['admin']), async (req: Request, res: Response) => {
    const createUserService = new CreateUserService()
    const createUserController = new CreateUserController(createUserService)
    
    return createUserController.handle(req, res)
  })
  .get('/users', 
    isAuthenticated(), is(['admin']), 
    async (req: Request, res: Response) => {
      const listUsersService = new ListUsersService()
      const listUsersController = new ListUsersController(listUsersService)
      
      return listUsersController.handle(req, res)
    })
  .delete('/users', 
    isAuthenticated(), is(['admin']),
    async (req: Request, res: Response) => {
    const removeUserService = new RemoveUserService()
    const removeUserController = new RemoveUserController(removeUserService)
    
    return removeUserController.handle(req, res)
  })
  .patch('/users', 
    isAuthenticated(), is(['client', 'admin']),
    async (req: Request, res: Response) => {
    const updateUserService = new UpdateUserService()
    const updateUserController = new UpdateUserController(updateUserService)
    
    return updateUserController.handle(req, res)
  })
  .post('/auth', async (req: Request, res: Response) => {
    const authUserService = new AuthUserService()
    const authUserController = new AuthUserController(authUserService)
    return authUserController.handle(req, res)
    
  })
  userRoutes
  .post('/register', async (req: Request, res: Response) => {
    const createUserService = new CreateUserService()
    const createUserController = new CreateUserController(createUserService)
    
    return createUserController.handle(req, res)
  })
  
export default userRoutes
import express, { Router } from 'express'
import userRoutes from './user'
import animalRoutes from './animal'
import specieRoutes from './specie'

const routes: Router = express.Router()

routes
  .use('/', userRoutes)
  .use('/', animalRoutes)
  .use('/', specieRoutes)

// -- ROTA DE LOGIN
// .post('/session', new AuthUserController().handle)
// .get('/me', isAuthenticated, new DetailUserConroller().handle)

export default routes
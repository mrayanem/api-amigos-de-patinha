import express, { Router } from "express"
import { CreateAnimalController } from "../controllers/animal/CreateAnimalController"
import { ListAnimalsController } from "../controllers/animal/ListAnimalsController"
import { RemoveAnimalController } from "../controllers/animal/RemoveAnimalController"
import { UpdateAnimalController } from "../controllers/animal/UpdateAnimalController"
import { CreateAnimalService } from "../services/animal/CreateAnimalService"
import { ListAnimalsService } from "../services/animal/ListAnimalService"
import { RemoveAnimalService } from "../services/animal/RemoveAnimalService"
import { UpdateAnimalsService } from "../services/animal/UpdateAnimalService"

import { createAnimalValidation } from "./validations"

const animalRoutes: Router = express.Router()

// --ROTAS ANIMAL CADASTRO
animalRoutes
  .post('/animals', createAnimalValidation, async (req, res) => {
    const createAnimalService = new CreateAnimalService()
    const createAnimalController = new CreateAnimalController(createAnimalService)
    
    return createAnimalController.handle(req, res)
  })
  .get('/animals', async (req, res) => {
    const listAnimalsService = new ListAnimalsService()
    const listAnimalsController = new ListAnimalsController(listAnimalsService)
    
    return listAnimalsController.handle(req, res)
  })
  .delete('/animals', async (req, res) => {
    const removeAnimalService = new RemoveAnimalService()
    const removeAnimalController = new RemoveAnimalController(removeAnimalService)
    
    return removeAnimalController.handle(req, res)
  })
  .patch('/animals', async (req, res) => {
    const updateAnimalService = new UpdateAnimalsService()
    const updateAnimalController = new UpdateAnimalController(updateAnimalService)
    
    return updateAnimalController.handle(req, res)
  })

export default animalRoutes
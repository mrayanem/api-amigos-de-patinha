import express, { Router } from "express"
import multer from "multer"
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
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// --ROTAS ANIMAL CADASTRO
animalRoutes
  .post('/animals', upload.single("photoAnimal"), (req, res, next) => {
    try {
      const data = JSON.parse(req.body.data);
      req.body = { ...req.body, ...data, photoAnimal: req.file as Express.Multer.File };
    } catch (e: any) {
      throw new Error(e);
    }
    next();
  },createAnimalValidation, async (req, res) => {
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
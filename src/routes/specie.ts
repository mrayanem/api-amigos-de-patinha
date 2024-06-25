import express, { Router } from "express"
import { CreateSpecieController } from "../controllers/specie/CreateSpecieController"
import { CreateSpecieService } from "../services/specie/CreateSpecieService"

const specieRoutes: Router = express.Router()

specieRoutes
  .post('/species', async (req, res) => {
    const createSpecieService = new CreateSpecieService()
    const createSpecieController = new CreateSpecieController(createSpecieService)
    
    return createSpecieController.handle(req, res)
  })

export default specieRoutes

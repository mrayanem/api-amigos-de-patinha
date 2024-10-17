import express, { Request, Response, NextFunction } from 'express'
import { config } from 'dotenv'
import cors, { CorsOptions } from 'cors';
import bodyParserErrorHandler from 'express-body-parser-error-handler'
import routes from './routes/routes';

const app = express()

async function main() {
  config()

  const corOptions: CorsOptions = {
    origin: '*'
  }

  app.use(cors(corOptions))
  app.use(express.json())
  app.use(bodyParserErrorHandler())

  app.use(routes)

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
      console.log(err.message)
      return res.status(400).json({
        success: false,
        data: err.message
      })
    }

    res.status(500).json({
      success: false,
      data: `Internal server error - ${err}`
    })
  })

}

main();

export { app }
import {Request, Response, NextFunction, Router} from 'express'

function apiRouter(): Router {
  let router : Router

  router = Router()
  router.get('/collections', getAll)
  router.get('/collections/:name', getOne)

  function getAll(req: Request, res: Response, next: NextFunction): void {
    res.json({
      error: true,
      message: 'I didn\'t implement this yet',
      data: []
    })
  }

  function getOne(req: Request, res: Response, next: NextFunction): void {
    res.json({
      error: true,
      message: 'I didn\'t implement this yet',
      data: []
    })
  }

  return router
}

export default apiRouter()
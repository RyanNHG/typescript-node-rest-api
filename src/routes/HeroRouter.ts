import {Router, Request, Response, NextFunction} from 'express'
const Heroes = require('../data')

export class HeroRouter {

  public router: Router

  constructor() {
    this.router = Router()
    this.router.get('/', this.getAll)
    this.router.get('/:id', this.getOne)
  }

  private getAll(req: Request, res: Response, next: NextFunction) {
    res.send(Heroes)
  }

  private getOne(req: Request, res: Response, next: NextFunction) {
    let id: number = parseInt(req.params['id'])
    let hero = Heroes.find(hero => hero.id === id)
    if (hero != undefined) {
      res.status(200)
        .send({
          message: 'Success',
          status: res.status,
          hero
        })
    } else {
      res.status(404)
        .send({
          message: `No hero found with id '{id}'`,
          status: res.status
        })
    }
  }

}

export default new HeroRouter().router
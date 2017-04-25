import {Router, Request, Response, NextFunction} from 'express'
const Heroes = require('../data')

export class HeroRouter {

  public router: Router

  constructor() {
    this.router = Router()
    this.router.get('/', this.getAll)
  }

  private getAll(req: Request, res: Response, next: NextFunction) {
    res.send(Heroes)
  }

}

export default new HeroRouter().router
import * as path from 'path'
import * as express from 'express'
import * as logger from 'morgan'
import * as bodyParser from 'body-parser'

import apiRouter from './routes/apiRouter'

function App({ testing }): express.Application {

  function app () {
    let app = express()
    middleware(app)
    routes(app)
    return app
  }

  function middleware(app): void {
    if (testing !== true) {
      app.use(logger('dev'))
    }
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
  }

  function routes(app): void {
    app.use('/api', apiRouter)
  }

  return app()
}

export default App
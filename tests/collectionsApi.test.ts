import * as mocha from 'mocha'
import * as chai from 'chai'
import chaiHttp = require('chai-http')

import App from '../src/app'

let app = App({
  testing: true
})

chai.use(chaiHttp)
const expect = chai.expect

function isStandardResponse(res: ChaiHttp.Response): void {
  expect(res).to.be.json
  expect(res.body).to.be.an('object')
  expect(res.body.error).to.be.a('boolean')
  expect(res.body.message).to.be.a('string')
  expect(res.body.data).to.be.an('array')
}

describe('GET /api/collections', () => {

  const url = '/api/collections'

  it('has standard response', () =>
    chai.request(app).get(url)
      .then(isStandardResponse)
  )
  
})

describe('GET /api/collections/:name', () => {

  const url = '/api/collections/people'

  it('has standard response', () =>
    chai.request(app).get(url)
      .then(isStandardResponse)
  )
  
})
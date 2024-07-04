const request = require('supertest')
const app = require('../../src/hello')

describe('GET /hello/:name', () => {
  test('It should respond with a welcome message with the name', async () => {
    const response = await request(app).get('/hello/Bob')

    expect(response.statusCode).toBe(200)
    expect(response.text).toEqual('Hello, Bob!')
  })
})

describe('GET /goodbye/:name', () => {
  test('It should respond with a goodbye message with the name', async () => {
    const response = await request(app).get('/goodbye/Bob')

    expect(response.statusCode).toBe(200)
    expect(response.text).toEqual('Goodbye, Bob!')
  })
})

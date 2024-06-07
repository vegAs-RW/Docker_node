const { greet, bye } = require('../../../service/greetings')

describe('Testing our Greetings Service', () => {
  test('Should return a welcome message with the name', () => {
    expect(greet('Bob')).toBe('Hello, Bob!')
  })

  it('Should return a goodbye message with the name', () => {
    expect(bye('Bob')).toBe('Goodbye, Bob!')
  })
})

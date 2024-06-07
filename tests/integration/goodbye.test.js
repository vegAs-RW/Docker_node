const goodbye = require('../../src/goodbye')

test('Returns Goodbye message with a name', () => {
  expect(goodbye()).toBe('Goodbye, Bob!')
})

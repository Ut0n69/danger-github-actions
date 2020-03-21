const greeting = require('./greeting');

describe('Greeting', () => {
  test('should be greeting', () => {
    expect(greeting("Caroline")).toBe('Hi Caroline!');
  })
});
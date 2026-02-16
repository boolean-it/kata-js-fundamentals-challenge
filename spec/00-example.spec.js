const { a, b } = require('../src/00-example.js');

describe('example function', () => {
  test("returns the string 'Hi, Ed'", () => {
    expect(a()).toBe('Hi, Ed!');
  });

  test('increments 1 to 2', () => {
    expect(b(1)).toBe(2);
  });
});

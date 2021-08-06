const { sumar } = require('./index');

test('cuando sumo los tres numeros entonces el resultado es: 8', () => {
    expect(sumar(1, 3, 4)).toBe(8);
  });
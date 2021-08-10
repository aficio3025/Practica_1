const { sumarTresNumeros } = require('./index');

test('cuando sumo los tres numeros entonces el resultado es: 8', () => {
    expect(sumarTresNumeros(1,3)).toBe(8);
  });
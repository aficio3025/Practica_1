const { esMayor } = require("./index");

test('cuando comparo 1 y 3 por mayor el resultado es falso', () => {
    expect(esMayor(1, 3)).toBe(false);

})
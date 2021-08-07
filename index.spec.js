const { ElMayorDeDosNumeros } = require("./index");

test('comparo dos numeros y me devuelve el numero mayor', () => {
    expect(ElMayorDeDosNumeros(3, 2)).toBe(3);

})
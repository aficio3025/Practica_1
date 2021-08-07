function sumarTresNumeros(a,b,c) {
    
    c = (typeof c !== 'undefined') ?  c : 4
    const d = a + b + c;

    return d;
    
}

module.exports = { sumarTresNumeros };


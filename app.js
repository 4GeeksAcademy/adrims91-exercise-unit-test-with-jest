// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };



const oneEuroIs = {
    "USD": 1.07,
    "JPY": 140.0,
    "GBP": 0.85,
};

const fromEuroToDollar = (valueInEuro) => {
    return valueInEuro * oneEuroIs["USD"];
}

const fromDollarToYen = (dollars) => {
    let euros = dollars / oneEuroIs["USD"];
    return euros * oneEuroIs["JPY"];
}

const fromYenToPound = (yen) => {
    let euros = yen / oneEuroIs["JPY"];
    return euros * oneEuroIs["GBP"];
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
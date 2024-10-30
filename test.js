const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23)
});

const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('Convert 10 Euros to Dollars', () => {
    expect(fromEuroToDollar(10)).toBe(10 * 1.07); 
});

test('Convert 10 Dollars to Yens', () => {
    expect(fromDollarToYen(10)).toBeCloseTo((10 / 1.07) * 140.0);
});

test('Convert 140 Yens to Pounds', () => {
    expect(fromYenToPound(140)).toBeCloseTo(140 / 140.0 * 0.85);
});

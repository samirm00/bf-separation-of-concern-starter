import sum from './sum.js';

describe('sum of two numbers', () => {
    test(' 1 + 2 -> 3', () => {
        const actual = sum(1, 2);
        expect(actual).toBe(3);
    });

    test(' 10 + 2 -> 12', () => {
        const actual = sum(10, 2);
        expect(actual).toBe(12);
    });
});

import sum from './sum.js';

describe('sum of two numbers', () => {
    test(' 1 + 4 -> 5', () => {
        const actual = sum(1, 4);
        expect(actual).toBe(5);
    });
});

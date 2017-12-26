'use strict';

const isPrime = require('../isPrime');
const expect = require('chai').expect;

describe('Module 1 - Prime', () => {
    it("should return a true for a prime number", () => {
        return expect(isPrime(2)).to.equal(true);
    });

    it("should return 0 if negative value passed", () => {
        return expect(isPrime(-2)).to.equal(0);
    });

    const primeValues = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 719, 997];

    primeValues.forEach((i) => {
        it(`should return 'true' for ${i}`, () => {
            return expect(isPrime(i)).to.equal(true);
        });
    });

    const nonPrimeValues = [4, 6, 8, 9, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 100, 999, 10000];

    nonPrimeValues.forEach((i) => {
        it(`should return 'false' for ${i}`, () => {
            return expect(isPrime(i)).to.equal(false);
        });
    });
});
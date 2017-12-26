'use strict';

/**
 * Returns the true if given number is a prime.
 *
 * @param {number} number (n >= 1)
 * @returns {Boolean} true in case of prime, false otherwise.
 * @throws {Error} returns 0 if any arguments are not proper
 */
function isPrime(number) {
    /*
     * Your task is to  return true if the given number if prime, return false otherwise.
     *
     * A prime number (or a prime) is a natural number greater than 1,
     * that has no positive divisors other than 1 and itself.
     * https://en.wikipedia.org/wiki/Prime_number
     * 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37
     */

    if (number <= 1) {
        return 0;
    } else if (number == 2) {
        return true;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }

    return true;
}
module.exports = isPrime;
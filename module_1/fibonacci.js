'use strict';

/**
 * Returns the nth value of the Fibonacci sequence.
 *
 * @param {number} n (n >= 1)
 * @returns {number}
 * @throws {Error} Fibonacci number or 0 if any arguments are not proper
 */
function fibonacci(n) {
    let result = 0;
    /*
     * Your task is to calculate the n-th value of the Fibonacci sequence.
     * https://en.wikipedia.org/wiki/Fibonacci_number
     * 1, 1, 2, 3, 5, 8, 13, 21
     *
     * Store the value in the result variable.
     * Also take into consideration the documentation of the function!
     */

    if (n <= 0) {
        return 0;
    } else if (n == 1 || n == 2) {
        return 1;
    }

    let a = 1, b = 1;

    for (let i = 3; i <= n; i++) {
        result = a + b;
        a = b;
        b = result;
    }

    return result;
}
module.exports = fibonacci;
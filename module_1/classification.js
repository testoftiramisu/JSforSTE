'use strict';

/**
 * The function returns the grade (1-5) of the student,
 * based on the score and the following rules:
 *  - 90 -    : 5
 *  - 80 - 89 : 4
 *  - 70 - 79 : 3
 *  - 60 - 69 : 2
 *  -    - 59 : 1
 *
 * @param {number} score (0 <= score <= 100)
 * @returns {number} grade or 0 if any arguments are not proper
 */
function grade(score) {
    let gradeOfStudent;
    /*
     * Your task is to calculate the grade of the student
     * based on his/her score which can be found in the
     * score variable and those rules can be found in the
     * documentation of the function.
     * Store the grade in the gradeOfStudent variable.
     * Also take into consideration the documentation of the function!
     */

    if (score < 0 || score > 100) {
        return 0;
    } else if (score <= 59) {
        return 1;
    } else if (score <= 69) {
        return 2;
    } else if (score <= 79) {
        return 3;
    } else if (score <= 89) {
        return 4;
    } else if (score <= 100) {
        return 5;
    }
    return gradeOfStudent;
}
module.exports = grade;
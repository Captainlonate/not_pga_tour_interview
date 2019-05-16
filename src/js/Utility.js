/*
    Utility.js
    Just a file with useful utility methods that were generic
    enough to be extracted out of any one component.
    
    There should only be NAMED exports in this file.
*/



/*
    Given a FirstName and LastName, return a formatted string
    Ex:
        formatName("Nathan", "Lough") === "Lough, Nathan"
*/
export const formatName = (fn, ln) => `${ln}, ${fn}`;


/*
    Check if a string is a string and of a minimum length (min)
    Returns true if the string is valid
*/
export const validateString = (str, min) => (
    typeof str === "string" && str.trim().length >= min
);


/*
    Check if a number can be coerced into a number and if so, is between
    a specified range
*/
export const validateNumRange = (num, min = 0, max = 100) => {
    try {
        let numAsNum = Number(num);
        return typeof numAsNum === "number" && numAsNum >= min && numAsNum <= max;
    } catch (ex) {
        return false;
    }
};


/*
    Checks if a given argument is a function
    (This is how lodash checks)
*/
export const isFunction = (fn) => (
    !!(fn && fn.constructor && fn.call && fn.apply)
);


/*
    Given the player's score and the par for the round,
    return a string representing their "Total"
    EX:
        "-8"    "0"   "+13"
*/
export const CalculatePar = (score, par) => {
    let total = score - par;
    let sign = '';
    if (total < 0) {
        sign = '-';
    }
    else if (total > 0) {
        sign = '+';
    }
    return `${sign}${Math.abs(total)}`;
}
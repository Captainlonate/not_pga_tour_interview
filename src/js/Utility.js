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
    Builds a function that can check the length of a string
    First tell it the minimum number of characters (inclusive)
    Then, invoke the curried function with the string.
    Returns true if the string is at least min length
*/
export const checkStringLen = (min) => (str) => (
    typeof str === "string" && str.trim().length >= min
);
// A Specialized form of checkStringLen
export const hasTwoChars = checkStringLen(2);


/*
    Builds a function that can check that a number is within
    a specified range (inclusive).
    Note that it will try to coerce the num into a Number type
*/
export const checkNumRange = (min, max) => (num) => {
    try {
        let numAsNum = Number(num);
        return typeof numAsNum === "number" && numAsNum >= min && numAsNum <= max;
    } catch (ex) {
        return false;
    }
}
// A Specialized form of checkNumRange
export const zeroToHundred = checkNumRange(0, 100);


/*
    Checks if a given argument is a function
    (This is how lodash checks)
*/
export const isFunction = (fn) => (
    !!(fn && fn.constructor && fn.call && fn.apply)
);


/*
    Get the string representation of a number's sign
    This forces the '+' sign for positive numbers
    It results in no sign for 0
*/
export const GetNumberSign = (num) => {
    if (num < 0) { return '-'; }
    if (num > 0) { return '+' }
    return '';
};

/*
    Given the player's score and the par for the round,
    return a string representing their "Total"
    EX:
        "-8"    "0"   "+13"
*/
export const CalculatePar = (score, par) => {
    let total = score - par;
    return `${GetNumberSign(total)}${Math.abs(total)}`;
};


/*
    Simple predicate functions
*/
export const isTrue = (v) => !!v;
export const isFalse = (v) => !v;


/*
    Takes an array of functions (validators).
    Returns a function which waits for a value.
    When the value comes in, check each function with the value.
    If any function returns false, return false.
*/
export const buildValidator = (fns) => (v) => fns.map(fn => fn(v)).every(isTrue);


/*
    Option chooser
    Preload two options and get back a function.
    The function is waiting on a boolean.
    Call the function many times with different test results.
*/
export const ifTrueFalse = (ifTrue, ifFalse) => (bool) => {
    return (bool === true) ? ifTrue : ifFalse;
};
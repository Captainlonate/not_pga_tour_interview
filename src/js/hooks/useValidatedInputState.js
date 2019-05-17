import {useState} from 'react';
import {buildValidator} from '../Utility.js';

/*
    This is a state manager for form inputs.
    It's unique in that it won't allow you to change the value
    if the proposed value does not pass all validation checks.
    Validator functions are provided via 'validators'.
    Each should be a function that returns true if the proposed
    value is acceptable.
    Note:
        This won't really work with a string length validators on a text input.
        This is because since the input starts off with 0 chars, 
        that would be invalid and typing a single character would
        still be too few.
*/
export default (validators, initialValue) => {
    const [value, setValue] = useState(initialValue);

    // Make a validator for this state manager
    const isValid = buildValidator(validators);

    // Whenever you try to set a new value, the value will only
    // be successfully set if it passes all the validator functions
    const setIfValid = (data) => {
        if (isValid(data)) {
            setValue(data);
        }
    }

    // Whenever you try to set a new value, the value will only
    // be successfully set if it passes all the validator functions
    // This one can be directly hooked up to an onChange={} handler
    const setIfValidEvent = (e) => {
        let data = e.target.value;
        if (isValid(data)) {
            setValue(data);
        }
    }

    // Allows outside code get the current validation state
    // of this value. Should always be true, except
    // that the initialValue is not run through validator
    const checkIfValid = () => {
        return isValid(value);
    }

    return [value, setIfValid, setIfValidEvent, checkIfValid];
};

import {useState} from 'react';

/*
    State Manager for toggling things on and off
    (Should only hold booleans)
*/
export default (initialValue) => {
    const [value, setValue] = useState(!!initialValue);

    // Doesn't need input, because it simply toggles
    const toggle = () => {
        setValue(!value);
    }

    return [value, toggle];
};
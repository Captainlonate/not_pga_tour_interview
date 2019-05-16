import {useState} from 'react';

/*
    State Manager for 
*/
export default (initialValue) => {
    const [value, setValue] = useState(initialValue);

    // Intended to be used directly within an onChange handler
    const setValueByEvent = (e) => {
        setValue(e.target.value);
    };

    return [value, setValue, setValueByEvent];
};
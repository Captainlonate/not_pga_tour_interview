import {useState} from 'react';

/*
    State Manager for managing an input's value
    Rather than directly setting the value of this state
    with setValue(), it's more convenient to be able to 
    directly attach setValueByEvent
    EX:
        <input type="text" onChange={setValueByEvent} value={value} />
*/
export default (initialValue) => {
    const [value, setValue] = useState(initialValue);

    // Intended to be used directly within an onChange handler
    const setValueByEvent = (e) => {
        setValue(e.target.value);
    };

    return [value, setValue, setValueByEvent];
};
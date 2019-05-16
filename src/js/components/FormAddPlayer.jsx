import {useState} from 'react';
import useInputState from '../hooks/useInputState.js';
import InputGroup from './InputGroup.jsx';
import ValidationMessage from './ValidationMessage.jsx';
import {validateString, validateNumRange, isFunction} from '../Utility.js';


/*
    Component: FormAddPlayer

    This component is a form. Specifically, the one that allows
    the user to Add a new Player. (It appears in the sidebar)
*/
const FormAddPlayer = ({onSubmit}) => {

    // The data fields behind each form field
    let [first_name, setFN, setFNEvent] = useInputState("");
    let [last_name, setLN, setLNEvent] = useInputState("");
    let [score, setScore, setScoreEvent] = useInputState(0);
    let [submitAttempted, setSubmitAttempted] = useState(false);

    // Is each form field currently valid?
    let first_name_isValid = validateString(first_name, 2);
    let last_name_isValid = validateString(last_name, 2);
    let score_isValid = validateNumRange(score, 0, 100);

    // Which classes should appear on these inputs
    let input_classes = ["form__input", "form__input--rounded", "form__input--borderless"];

    // When the user attempts to submit the entire form...
    const handleSubmit = (e) => {
        e.preventDefault();
        // Only begin showing error messages, if they've tried to submit at least once
        setSubmitAttempted(true);
        // ...First, ensure the form fields are all valid
        if ( first_name_isValid && last_name_isValid && score_isValid ) {
            if (isFunction(onSubmit)) {
                onSubmit({ first_name, last_name, score });
                setFN("");
                setLN("");
                setScore(0);
                setSubmitAttempted(false);
            }
        }
    };

    return (
        <form className="form form--add-player">
            {/* The Submit Button (To Add A New Player) */}
            <button className="button button--stripey" type="submit" onClick={handleSubmit}>Add Player</button>
            
            {/* The Form Fields - First Name, Last Name, Score */}
            <InputGroup>
                <input className={input_classes.join(' ')} type="text" value={first_name} onChange={setFNEvent} placeholder="First Name" required />
                <ValidationMessage showing={submitAttempted && !first_name_isValid}>Invalid First Name (2+ Chars)</ValidationMessage>
            </InputGroup>

            <InputGroup>
                <input className={input_classes.join(' ')} type="text" value={last_name} onChange={setLNEvent} placeholder="Last Name" required />
                <ValidationMessage showing={submitAttempted && !last_name_isValid}>Invalid Last Name (2+ Chars)</ValidationMessage>
            </InputGroup>

            <InputGroup>
                <input className={input_classes.join(' ')} type="number" min="0" max="100" value={score} onChange={setScoreEvent} placeholder="Score" />
                <ValidationMessage showing={submitAttempted && !score_isValid}>Invalid Score [0, 100]</ValidationMessage>
            </InputGroup>
        </form>
    );
};

export default FormAddPlayer;
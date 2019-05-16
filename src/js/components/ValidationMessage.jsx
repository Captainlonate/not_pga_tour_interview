/*
    Component: ValidationMessage

    This component simply wraps some children (text)
    and applies some textual formatting (color).
    It's purpose is to be used within an InputGroup, 
    underneath of a <input>.
    It shouldn't always be visible. props.showing
    determines if this component shows anything.
*/
const ValidationMessage = (props) => {
    return (props.showing) ? (
        <span className="form__validationmsg">
            {props.children}
        </span>
    ) : null;
};

export default ValidationMessage;

const ValidationMessage = (props) => {
    return (props.showing) ? (
        <span className="form__validationmsg">
            {props.children}
        </span>
    ) : null;
};

export default ValidationMessage;
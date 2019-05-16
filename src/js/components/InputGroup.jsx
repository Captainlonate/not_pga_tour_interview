/*
    Component: InputGroup

    This component makes it easier to organize and group
    multiple form inputs (and even form inputs + labels)
*/
const InputGroup = (props) => {
    return (
        <div className="form__group">
            {props.children}
        </div>
    );
};

export default InputGroup;
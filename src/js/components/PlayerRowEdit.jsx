import PlayerListCell from './PlayerListCell.jsx';
import useInputState from '../hooks/useInputState.js';
import InputGroup from './InputGroup.jsx';
import {validateString, validateNumRange} from '../Utility.js';

/*
    Component: PlayerRowEdit

    This component is a specialized type of PlayerRow
    This component allows the user to edit a single player,
    by presenting a form within the "Table" row.
*/
const PlayerRowEdit = ({player, toggleEditing, editPlayer}) => {

    // The data fields behind each form field
    let [first_name, setFN, setFNEvent] = useInputState(player.first_name);
    let [last_name, setLN, setLNEvent] = useInputState(player.last_name);
    let [score, setScore, setScoreEvent] = useInputState(player.score);

    // Is each form field currently valid?
    let first_name_isValid = validateString(first_name, 2);
    let last_name_isValid = validateString(last_name, 2);
    let score_isValid = validateNumRange(score, 0, 100);

    //
    let first_name_classes = (first_name_isValid) ? ["form__input"] : ["form__input", "form__input--invalid"];
    let last_name_classes = (last_name_isValid) ? ["form__input"] : ["form__input", "form__input--invalid"];
    let score_classes = (score_isValid) ? ["form__input"] : ["form__input", "form__input--invalid"];

    // When the user attempts to save the changes...
    const attemptToSave = () => {
        if ( first_name_isValid && last_name_isValid && score_isValid ) {
            editPlayer({first_name, last_name, score, id: player.id});
            toggleEditing();
        }
    };

    return (
        <div className="player-row player-row--body player-row--editing">
            <PlayerListCell>
                <InputGroup>
                    <label htmlFor="row__score">Score</label>
                    <input id="row__score" className={score_classes.join(' ')} type="number" name="score" min="0" max="100" value={score} onChange={setScoreEvent} placeholder="Score" />
                </InputGroup>
            </PlayerListCell>
            <PlayerListCell>
                <div className="form__groups--flex">
                    <InputGroup>
                        <label htmlFor="row__first_name">First Name</label>
                        <input id="row__first_name" className={first_name_classes.join(' ')} type="text" value={first_name} onChange={setFNEvent} placeholder="First Name" required />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="row__last_name">Last Name</label>
                        <input id="row__last_name" className={last_name_classes.join(' ')} type="text" value={last_name} onChange={setLNEvent} placeholder="Last Name" required />
                    </InputGroup>
                </div>
            </PlayerListCell>
            <PlayerListCell>
                {/* The Save Icon */}
                <i className="fa fa-check-circle pointer txt-green anim-bounce-up" onClick={attemptToSave}></i>
            </PlayerListCell>
        </div>
    );
};

export default PlayerRowEdit;
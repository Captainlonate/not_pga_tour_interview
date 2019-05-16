import PlayerRowPres from './PlayerRowPres.jsx';
import PlayerRowEdit from './PlayerRowEdit.jsx';
import useToggleState from '../hooks/useToggleState.js';


/*
    Component: PlayerRow

    This component represents one row of the "Tabular" structure.
    This is similar to a <tr>.
    It would be a row within the PlayerList.
    This type of row can be in one of two modes (Editing, or Presenting)
    There are more specialized row components for each of the two modes.
    When editing, you'll see a PlayerRowEdit
    When simply viewing, you'll see a PlayerRowPres (Presentation)
*/
const PlayerRow = ({player, editPlayer, deletePlayer}) => {

    // Indicates whether or not this row is in an "editing" state
    // An "editing" state is one in which the cells have inputs, rather
    // than presentational elements
    let [isEditing, toggleEditing] = useToggleState(false);

    let body = null;

    if (isEditing) {
        body = <PlayerRowEdit player={player} toggleEditing={toggleEditing} editPlayer={editPlayer} />
    } else {
        body = <PlayerRowPres player={player} toggleEditing={toggleEditing} deletePlayer={deletePlayer} />
    }

    return (body);
};

export default PlayerRow;
import PlayerRowPres from './PlayerRowPres.jsx';
import PlayerRowEdit from './PlayerRowEdit.jsx';
import useToggleState from '../hooks/useToggleState.js';


/*

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
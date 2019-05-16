import PlayerListEmpty from './PlayerListEmpty.jsx';
import PlayerRow from './PlayerRow.jsx';

/*
    Component: PlayerList

    This component is responsible for presenting the list
    of players (the actual rows of the "Table") (It's not a real table).
    It creates a PlayerRow for each player.
*/
const PlayerList = ({players, editPlayer, deletePlayer}) => {
    // If there are no players to show, then fallback to this Empty message
    let rows = (<PlayerListEmpty>No Players to show. Add some!</PlayerListEmpty>);

    // Create a "Tabular" row for each player
    if (players.length > 0) {
        rows = players.map(p => (
            <PlayerRow key={p.id} player={p} editPlayer={editPlayer} deletePlayer={deletePlayer} />
        ));
    }

    return (
        <div className="player-list">
            {rows}
        </div>
    );
};

export default PlayerList;
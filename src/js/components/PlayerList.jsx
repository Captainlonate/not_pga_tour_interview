import PlayerListColumns from './PlayerListColumns.jsx';
import PlayerListEmpty from './PlayerListEmpty.jsx';
import PlayerRow from './PlayerRow.jsx';

/*

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
            {/* The column titles of the "Tabular" data */}
            {/* <PlayerListColumns titles={["Score", "Total", "Name", ""]} /> */}
            {/* The rows of the "Tabular" data */}
            {rows}
        </div>
    );
};

export default PlayerList;
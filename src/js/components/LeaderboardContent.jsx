import PlayerList from './PlayerList.jsx';
import PlayerListColumns from './PlayerListColumns.jsx';

/*

*/
const LeaderBoardContent = (props) => {
    return (
        <div className="leaderboard-content">
            {/* The column titles of the "Tabular" data */}
            <PlayerListColumns titles={["Score", "Total", "Name", ""]} />
            <PlayerList players={props.players} 
                editPlayer={props.editPlayer} 
                deletePlayer={props.deletePlayer} />
        </div>
    );
};

export default LeaderBoardContent;
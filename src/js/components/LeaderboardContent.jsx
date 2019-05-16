import PlayerList from './PlayerList.jsx';
import PlayerListColumns from './PlayerListColumns.jsx';

/*
    Component: LeaderBoardContent

    This is the component that manages the list of players
    (The Tabular structure)
*/
const LeaderBoardContent = (props) => {
    return (
        <div className="leaderboard-content">
            {/* The column titles of the "Tabular" data */}
            <PlayerListColumns titles={["Score", "Total", "Name", ""]} />
            {/* The actual rows containing the players */}
            <PlayerList players={props.players} 
                editPlayer={props.editPlayer} 
                deletePlayer={props.deletePlayer} />
        </div>
    );
};

export default LeaderBoardContent;
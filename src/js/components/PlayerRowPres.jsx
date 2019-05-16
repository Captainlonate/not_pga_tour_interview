import PlayerListCell from './PlayerListCell.jsx';
import ScoreCircle from './ScoreCircle.jsx';
import {formatName, CalculatePar} from '../Utility.js';
import ParContext from '../context/parContext.js';

/*
    Component: PlayerRowPres

    This component is a specialized type of PlayerRow
    This component simply presents the Player's data
*/
const PlayerRowPres = ({player, toggleEditing, deletePlayer, context}) => {
    // Invoked when the user clicks the 'Delete' icon for a given 'Player'
    let handleDelete = () => deletePlayer(player.id);

    return (
        <div className="player-row player-row--body">
            <PlayerListCell>
                {/* The Player's Score (In a Color Coded Circle) */}
                <ScoreCircle score={player.score} />
            </PlayerListCell>
            <PlayerListCell>
                {/* The Player's Par Total (-15, +2) */}
                <ParContext.Consumer>
                    {par => CalculatePar(player.score, par)}
                </ParContext.Consumer>
            </PlayerListCell>
            <PlayerListCell>
                {/* The Player's Name */}
                {formatName(player.first_name, player.last_name)}
            </PlayerListCell>
            <PlayerListCell>
                {/* The Edit Icon */}
                <i className="fa fa-edit pointer txt-orange anim-bounce-up" onClick={toggleEditing}></i>
                {/* The Delete Icon */}
                <i className="fa fa-trash pointer txt-red anim-bounce-down" onClick={handleDelete}></i>
            </PlayerListCell>
        </div>
    );
};

export default PlayerRowPres;
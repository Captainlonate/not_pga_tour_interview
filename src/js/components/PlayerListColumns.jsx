import PlayerListCell from './PlayerListCell.jsx';

/*

*/
const PlayerListColumns = ({titles = []}) => {
    return (
        <div className="player-row player-row--head">
            {titles.map((el, idx) => (
                <PlayerListCell key={idx}>{el}</PlayerListCell>
            ))}
        </div>
    );
};

export default PlayerListColumns;
import PlayerListCell from './PlayerListCell.jsx';

/*
    Component: PlayerListColumns

    This component represents the table head of the PlayerList.
    Essentiallys, it's just the column titles
    "titles" is just an array of strings (column titles)
    Be sure to include the same number of column titles as you
    have columns within the PlayerList
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
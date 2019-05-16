/*
    Component: PlayerListCell

    If a PlayerList contains all rows of a "Table",
    and if a PlayerListRow is the actual row,
    then this component is the "Table Cell" of the row.
    This is like a custom <td> element.
*/
const PlayerListCell = (props) => (
    <div className="player-row__cell">
        {props.children}
    </div>
);

export default PlayerListCell;
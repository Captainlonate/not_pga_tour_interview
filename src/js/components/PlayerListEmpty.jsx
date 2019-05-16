/*
    Component: PlayerListEmpty

    This simply component just represents a row which is empty.
    You would show this if your PlayerList had zero elements (rows).
    It has unique styling (classes), so it seemed semantic to
    create a simply function to create this.
*/
const PlayerListEmpty = (props) => (
    <div className="player-row player-row--empty">
        {props.children}
    </div>
);

export default PlayerListEmpty;
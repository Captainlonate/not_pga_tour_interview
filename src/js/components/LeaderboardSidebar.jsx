import FormAddPlayer from './FormAddPlayer.jsx';

/*
    Component: LeaderBoardSidebar

    This is the component that forms the Sidebar of the
    Leaderboard application. (Though, it may be stacked
    in a mobile view). This component contains some
    branding information, such as application title and logo.
    Most useful however, this component creates the form
    which will allow the user to add new players.
*/
const LeaderBoardSidebar = (props) => {
    return (
        <div className="leaderboard-sidebar">
        
            <h1 className="leaderboard__title">
                <span>PGA</span>
                <br />
                Leaderboard
            </h1>

            <img className="leaderboard__logo" src="/images/pga_logo.gif" />

            <FormAddPlayer onSubmit={props.addPlayer} />

        </div>
    );
};

export default LeaderBoardSidebar;
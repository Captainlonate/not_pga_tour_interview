import FormAddPlayer from './FormAddPlayer.jsx';

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
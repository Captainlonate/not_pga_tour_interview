import LeaderBoard from './Leaderboard.jsx';
import BackgroundImage from './BackgroundImage.jsx';

const App = () => {
    return (
        <div className="app">
            <BackgroundImage url="/images/golf_bg_1.jpg" faded={true} full={true} />
            <LeaderBoard />
        </div>
    );
}

export default App;
import LeaderBoard from './Leaderboard.jsx';
import BackgroundImage from './BackgroundImage.jsx';

/*
    Component: App
    
    App is the primary component of this PGA Tour Project
    It's only responsibility is creating a background image,
    and loading the LeaderBoard component.
*/
const App = () => {
    return (
        <div className="app">
            {/* The Golf Course Background Image */}
            <BackgroundImage url="/images/golf_bg_1.jpg" faded={true} full={true} />
            {/* The Root Component of the Leaderboard Application */}
            <LeaderBoard />
        </div>
    );
}

export default App;
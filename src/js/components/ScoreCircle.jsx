
const getScoreColor = (score) => {
    let colors = ['green', 'yellow', 'orange', 'red'];
    if (score < 60) { return colors[0]; }
    else if (score < 70) { return colors[1]; }
    else if (score < 80) { return colors[2]; }
    return colors[3];
};

const ScoreCircle = ({score = 0}) => {
    let classes = ['score-circle', `score-circle--${getScoreColor(score)}`];
    
    return (
        <div className={classes.join(' ')}>{score}</div>
    );
};

export default ScoreCircle;
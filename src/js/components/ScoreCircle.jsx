/*
    Helper function - Determines which color (string)
    should represent the integer (score) that was passed in.
    Didn't seem generic enough to break out of this module.
*/
const getScoreColor = (score) => {
    let colors = ['green', 'yellow', 'orange', 'red'];
    if (score < 60) { return colors[0]; }
    else if (score < 70) { return colors[1]; }
    else if (score < 80) { return colors[2]; }
    return colors[3];
};

/*
    Component: ScoreCircle

    This component simply creates a small circle (rounded div)
    which contains a very small piece of data (a number).
    The circle is color coded based on it's value.
*/
const ScoreCircle = ({score = 0}) => {
    let classes = ['score-circle', `score-circle--${getScoreColor(score)}`];
    
    return (
        <div className={classes.join(' ')}>{score}</div>
    );
};

export default ScoreCircle;
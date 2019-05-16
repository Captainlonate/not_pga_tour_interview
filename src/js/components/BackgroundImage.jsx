
const BackgroundImage = ({url, faded = false, full = false}) => {
    // Which url for the background image
    let styles = {"backgroundImage": `url('${url}')`};
    
    // Which css classes should be applied
    let classes = ["bg-img"];
    
    // Should the bg image have an opacity
    if (faded) {
        classes.push("bg-img--faded");
    }

    // Should the bg image fill it's parent container
    if (full) {
        classes.push("bg-img--full");
    }

    return (
        <div className={classes.join(' ')} style={styles}></div>
    );
};

export default BackgroundImage;
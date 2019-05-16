/*
    Component: BackgroundImage

    Reponsible for creating a background image that can be opaque
    and/or full screen
*/
const BackgroundImage = ({url, faded = false, full = false}) => {
    // Which url for the background image
    let styles = {"backgroundImage": `url('${url}')`};
    
    // Which css classes should be applied
    let classes = [ "bg-img",
        // Should the bg image have an opacity
        ...(faded ? ["bg-img--faded"] : []),
        // Should the bg image fill it's parent container
        ...(full ? ["bg-img--full"] : [])
    ];

    return (
        <div className={classes.join(' ')} style={styles}></div>
    );
};

export default BackgroundImage;
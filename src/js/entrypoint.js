"use strict";
import App from './components/App.jsx';

/*
    The webpack entrypoint to the entire React Application
*/

try {

    // Bootstrap the App component
    // (This POC demo application only has one)
    ReactDOM.render(
        <App />, 
        document.getElementById('reactroot')
    );

} catch (err) {
    console.log("Entrypoint: Catch Error:", err);
}
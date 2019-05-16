'use strict';

/*
    Dependencies
*/
const express = require('express');
const chalk = require('chalk');
const path = require('path');
const helmet = require('helmet');

/*
    Information about this NodeJS Process
*/
const PORT = process.env.NODEPORT || 4005;
const HOST = '0.0.0.0';
process.title = "PGATourLeaderBoard";
console.info(chalk.cyan(`Process Id: ${process.pid}`));
console.info(chalk.cyan(`NODE_ENV Set To: ${process.env.NODE_ENV}`));

/*
    Express MiddleWare
*/
const app = express();
// https://www.npmjs.com/package/helmet#how-it-works
app.use(helmet());

/*
    Serving assets (css, js, images, fonts)
*/
app.use(express.static(path.join(__dirname, 'public'), {index: false}));

/*
    Routes
*/
const Home = (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
};
// GET / (Catches pathless request)
app.get('/', Home);
// GET * (Catches anything that didn't match yet. This should be last.)
app.get('/*', Home);

/*

*/
app.listen(PORT, HOST, () => {
    console.log( " - - - " + new Date().toLocaleString() + " - - - " );
    console.log(chalk.magenta(`PGATourLeaderBoard is listening on ${HOST}:${PORT}`));
});
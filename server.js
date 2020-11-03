const express = require('express');
const app = express(); //Server 1
const router = require('./consts/router.const');
const cors = require('./consts/cors.const');
const bodyParser = require('body-parser');
const storage = require('./consts/storage.const');
const path = require('path');
const setParams = require('./consts/environment.const');

setParams(process.env.ENVIRONMENT);

//const app2 = express(); //Server 2

//Init process (global) based firebase connection
const fbClient = require('./consts/firebase.const'); //read/write

//Init process (global) based admin firebase connection
const fbAdmin = require('./consts/firebase.admin.const'); //administrative read/write/modify etc.

//Create default nodejs session
const session = require('./consts/server.session.const');

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || "0.0.0.0";


app.set('trust proxy', 1) // trust first proxy
app.use(cors);
app.use(express.static(path.join(__dirname, 'static')));
app.use(session);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use((req, res, next) => {
	console.log(req.session.id);
	next();
})

app.use('/api', router);


router.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('static/index.html', { root: __dirname });
});

app.listen(PORT, HOST, () => {
	console.log(`Server is running on ${HOST}:${PORT}`);
})
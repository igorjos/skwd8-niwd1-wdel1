const setup = require('./setup');
const express = require('express');
const app = express(); //Server 1 
const router = require('./consts/router.const');
const cors = require('./consts/cors.const');
const bodyParser = require('body-parser');
const storage = require('./consts/storage.const');
const path = require('path');
const setParams = require('./consts/environment.const');
const helmet = require('helmet')

//Security 
//app.use(helmet());

app.use(
	helmet.contentSecurityPolicy({
	  directives: {
			defaultSrc: ["'self'", "'unsafe-inline'"],
			scriptSrc: ["'self'", "example.com"],
			objectSrc: ["'none'"],
			upgradeInsecureRequests: [],
		},
	})
 );

app.use(helmet.hidePoweredBy());

app.use(
	helmet.referrerPolicy({
	  policy: "no-referrer",
	})
);

app.use(
	helmet.hsts({
  		maxAge: 0,
	})
);

app.use(helmet.ieNoOpen());

//This to work nocache lib should be installed from NPM
// app.use(helmet.nocache());
//const noCache = require('nocache')
// ...
//app.use(noCache())


app.use(helmet.noSniff());

app.use(
	helmet({
		frameguard: {
		action: "deny",
		},
	})
);

app.use(helmet.xssFilter());

setParams(process.env.ENVIRONMENT);

//const app2 = express(); //Server 2

//Init process (global) based firebase connection
const fbClient = require('./consts/firebase.const'); //read/write

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

console.log(process.env)


app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('static/index.html', { root: __dirname });
});



app.listen(PORT, HOST, () => {
	console.log(`Server is running on ${HOST}:${PORT}`);
})
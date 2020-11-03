const session = require('express-session');
const { v4: uuidv4 } = require('uuid');

module.exports = session({
	secret: 'T3st123',
	resave: true,
	saveUninitialized: true,
	name: 'FirebaseTEst',
	cookie: { secure: false, httpOnly: true, maxAge: 1000 * 60 * 60 * 5},
	genid: () => {
		return uuidv4();
	}
})
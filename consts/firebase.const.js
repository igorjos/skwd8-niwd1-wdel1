const firebase = require('firebase');
const config = require('../configs/firebase-config');

const app = firebase.initializeApp(config);

if( ! process.firebase )
{
	process.firebase = app;
}
else
console.log('Firebase app connection already exist');

module.exports = app;
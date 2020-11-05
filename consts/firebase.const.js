const firebase = require('firebase');

const {apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId, measurementId} = process.env;
 
const config = {apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId, measurementId};

const app = firebase.initializeApp(config);

if( ! process.firebase )
{
	process.firebase = app;
}
else
console.log('Firebase app connection already exist');

module.exports = app;
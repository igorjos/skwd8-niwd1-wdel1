const admin = require("firebase-admin");

const config = require('../configs/firebase-config');

const app = admin.initializeApp(config);


if( ! process.firebaseAdmin )
process.firebaseAdmin = app;
else
console.log('Existing admin connection');

module.exports = app;
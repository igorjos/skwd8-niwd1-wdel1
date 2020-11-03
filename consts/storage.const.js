const { Storage } = require('@google-cloud/storage');

// Creates a client
const storage = new Storage({keyFilename: './configs/wd-elective-1-8290c3a1df4d.json'});

if( ! process.firebaseStorage )
process.firebaseStorage = storage;
else
console.log('Existing instance');

module.exports = storage;
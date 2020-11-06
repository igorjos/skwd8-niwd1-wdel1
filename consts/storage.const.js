const { Storage } = require('@google-cloud/storage');
const 
	{ 
		type, 
		project_id, 
		private_key_id, 
		private_key, 
		client_email, 
		client_id, 
		auth_uri, 
		token_uri, 
		auth_provider_x509_cert_url, 
		client_x509_cert_url 
	} = process.env;

const conf = { 
	type, 
	project_id, 
	private_key_id, 
	private_key: private_key.replace(/\\n/g, '\n'), 
	client_email, 
	client_id, 
	auth_uri, 
	token_uri, 
	auth_provider_x509_cert_url, 
	client_x509_cert_url 
};

const fs = require('fs');

fs.writeFileSync('firebase.json', JSON.stringify(conf));

// Creates a client
const storage = new Storage({keyFilename: './firebase.json'});

if( ! process.firebaseStorage )
process.firebaseStorage = storage;
else
console.log('Existing instance');

module.exports = storage;
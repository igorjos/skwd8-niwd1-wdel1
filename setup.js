const fs = require('fs');

const addToEnvironment = (json) => {
	for(let x in json)
	{
		if(x === "private_key")
		process.env[x] = json[x].replace(/\\n/g, '\n')

		process.env[x] = json[x];
	}
}

if(process.env.TESTSETUP == 'dev')
{
	console.log("Use environment from file");
	//Read js file config from Web app in Firebase
	let file = fs.readFileSync('../firebase.js').toString();

	if(file)
	addToEnvironment(JSON.parse(file));

	//Read json file config from cloud/storage in Google Cloud
	let jsonfile = fs.readFileSync('../wd-elective-1-e5b6145ef20d.json').toString();

	if(jsonfile)
	addToEnvironment(JSON.parse(jsonfile));
	
}
else
console.log("Use environment from config")


console.log(process.env)
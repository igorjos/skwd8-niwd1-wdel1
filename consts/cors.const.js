
module.exports = (req, res, next) => {

	let origin = req.headers.origin || req.headers.referer;

	if(origin && origin.match(/localhost/ig))
	{
		res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); //* = wildcard
		res.setHeader('Access-Control-Allow-Credentials', 'true');
    	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, APPKEY, withCredentials') //MIME => image/jpeg, video/mp4..
	}

	if(req.method === "OPTIONS")
	res.status(200).json({});
	else
	next();
}
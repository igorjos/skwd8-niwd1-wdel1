
module.exports = (req, res, next) => {

	if(req.body && req.body.name) 
	{
		if(req.body.name.length < 2)
		{
			res.status(400).json({message: "Name should be longer than 2 characters"});
		}
		else if(req.body.name.match(/[.*+\-?^${}()|[\]\\]/g))
		{
			res.status(400).json({message: "Name should contain only letters"});
		}
		else
		next();
	}
	else
	res.status(412).json({message: "Missing params or no params sent"});
}
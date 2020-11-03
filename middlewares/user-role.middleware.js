module.exports = (req, res, next) => {

	if(req.session && req.session.profileData && req.session.profileData.roles.includes('user'))
	next();
	else
	res.status(403).json({message: "Not authenticated"});
}
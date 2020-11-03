const router = require('express').Router();
const userRole = require('../middlewares/user-role.middleware');
const ProfileController = require('../controllers/profile.controller');

const pc = new ProfileController();

router.get('/', (req, res) => {

	if(req.session.user)
	pc.getProfile(req.session.user.user.email) //sent from Frontend
	.then(profileData => {
		req.session.profileData = profileData[0];
		res.status(200).json(profileData);
	})
	.catch(error => { console.log(error)
		res.status(400).json(error);
	});
	else 
	res.status(403).json({message: "Bad request"});
})

router.post('/', userRole, (req, res) => {

	if(req.body)
	pc.setProfile(req.body)
	.then((data) => {	
		res.status(200).json(data);
	})
	.catch(error => { console.log(error);
		res.status(400).json(error);
	})	
	else
	res.status(400).json({message: "Bad request"});
});

router.put('/', (req, res) => {
	res.status(200).json({});
})

module.exports = router;
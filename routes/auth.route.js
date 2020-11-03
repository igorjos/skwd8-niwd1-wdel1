const router = require('express').Router();
const AuthClientController = require('../controllers/auth.controller');

const acc = new AuthClientController();

router.post('/login', async (req, res) => {
	console.log(req.body);
	acc.login(req.body).then((data) => {
		//Initialize the session and keep userdata inside
		req.session.user = data;
		res.status(200).json(data);
	}).catch(error => {
		console.log(error);
		res.status(error.code).json(error);
	})
})

router.post('/register', (req, res) => {
	console.log(req.body);

	acc.register(req.body).then((data) => {
		//Initialize the session and keep userdata inside
		req.session.user = data;
		res.status(200).json(data);
	}).catch(error => {
		console.log(error);
		res.status(error.code).json(error);
	})

})

module.exports = router;
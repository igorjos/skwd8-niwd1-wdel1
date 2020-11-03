const router = require('express').Router();
const admin = require('../middlewares/admin-role.middleware');
const roleVerify = require('../middlewares/role-data-validate.middleware');
const RolesController = require('../controllers/roles.controller');

const rc = new RolesController();

router.get('/', admin, (req, res) => {

	rc.getRoles().then((roles) => {
		res.status(200).json(roles);
	})
	.catch(error => {
		res.status(error.code || 400).json(error);
	})
});

router.post('/', admin, roleVerify, (req, res) => {

	rc.addRole(req.body).then(() => {
		res.status(200).json({});
	})
	.catch(error => {
		console.log(error);
		res.status(error.code || 400).json(error);
	})
})

module.exports = router;
const router = require('express').Router();

const auth = require('../routes/auth.route');
const profile = require('../routes/profile.route');
const roles = require('../routes/roles.route');
const fs = require('../routes/fs.route');

router.get('/healthcheck', (req, res) => {
	res.status(200).json({session: req.session.id});
});

router.use("/auth", auth); //localhost:8080/api/auth -> /login || /register 
router.use("/profile", profile); //localhost:8080/api/profile
router.use('/roles', roles); //localhost:8080/api/roles
router.use('/fs', fs);

module.exports = router;
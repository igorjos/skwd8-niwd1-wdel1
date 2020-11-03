const router = require('express').Router();
const FilesController = require('../controllers/files.controller');

const fc = new FilesController();

router.get('/dir', (req, res) => {

	if(req.query)
	{
		let {path} = req.query;

		fc.listFilesInFolder(path)
		.then((result) => {
			res.status(200).json(result)
		})
		.catch((error) => {
			console.log(error);
			res.status(error.code || 412).json({message: "Can't read folder items"})
		})
		
	}
	else
	{
		res.status(400).json({message: "Bad request"});
	}
});

router.post("/dir", (req, res) => {

	if(req.body)
	{
		if(req.body.dirname && req.body.currentDir)
		{
			fc.createDirectoryWithDefaultFile(req.body)
			.then(() => {
				res.status(200).json({})
			})
			.catch(error => {
				console.log(error);
				res.status(400).json(error);
			})
		}
		else
		{
			res.status(412).json({message: "Missing params"});
		}
	}
	else
	{
		res.status(400).json({message: "Bad request"});
	}
});

router.get('/file', (req, res) => {

	if( req.query )
	{
		fc.getFileMetaData(req.query.path)
		.then((data) => {
			res.status(200).json(data);
		})
		.catch(error => {
			console.log(error);
			res.status(400).json(error);
		})
	}
	else
	res.status(400).json({message: "Bad requires"});
})

module.exports = router;
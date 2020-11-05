class FilesController
{
	constructor(){}

	listFilesInFolder(dirName)
	{
		console.log(process.env.mainDir);
		return new Promise(async (s, f) => {

			const content = [];

			const [files] = await process.firebaseStorage
			.bucket(process.env.storageBucket)
			.getFiles({prefix: `${process.env.mainDir}/${dirName}`, delimeter:  '/'}) //dev/test
			.catch((error) => {
				console.log(error);
				f(error);
				return false;
			});

			let regex = new RegExp(`^${process.env.mainDir}`, 'gm');

			if(files)
			files.forEach((file) => {
				
				content.push(file.name.replace(regex, ""));
			});

			s(content)
		})
			  
	}

	createDirectoryWithDefaultFile({currentDir, dirname})
	{	
		let fullpath = [process.env.mainDir];
		if(currentDir != "/")
		{
			fullpath.push(currentDir.split("/"))
			fullpath.push(dirname);
		}
		
		// console.log(fullpath.join("/"));
		// return 1;
		console.log(fullpath)
		return new Promise((s, f) => {
			process.firebaseStorage.bucket(fullpath.join("/")).upload("./controllers/README.MD", {
				
			})
			.then((r) => {
				s(r);
			})
			.catch(error => {
				console.log(error);
				f(error)
			})
		})
	}

	getFileMetaData(filePath)
	{
		return new Promise((s, f) => {
			process.firebaseStorage
			.bucket(process.env.storageBucket)
			.file([process.env.mainDir, filePath].join("/"))
			.makePublic()
			.then(() => {

				process.firebaseStorage
				.bucket(process.env.storageBucket)
				.file([process.env.mainDir, filePath].join("/"))
				.getMetadata()
				.then((metadata) => {
					console.log(metadata);
					s(metadata);
				})
				.catch(error => {
					console.log(error)
					f(error);
				});
			})
			.catch(error => {
				console.log('Public', error);
				f(error);
			})
		})
	}
}

module.exports = FilesController
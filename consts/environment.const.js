const setParams = (env) => 
{
	if(env == 'prod')
	{
		process.env.mainDir = 'prod';
	}
	else //dev
	{
		process.env.mainDir = 'dev';
	}
}

module.exports = setParams;
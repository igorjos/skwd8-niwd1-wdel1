
class AuthClientController
{
	constructor(){
		//this.firebase = process.firebase;
	}

	login({email, password})
	{
		return new Promise((s, f) => {
			process.firebase.auth().signInWithEmailAndPassword(email, password)
			.then((result) => {
				s(result)
			})
			.catch((error) => {
				f(error);
			})
		})
	}

	register({email, password})
	{
		return new Promise((s, f) => {
			process.firebase.auth().createUserWithEmailAndPassword(email, password)
			.then((result) => {
				s(result);
			})
			.catch((error) => {
				f(error);
		  });
		})		  
	}
	
}

module.exports = AuthClientController;
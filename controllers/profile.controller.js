
class ProfileController
{
	constructor(){}

	constProfile()
	{
		return {
			email: undefined,
			phone: undefined,
			street: undefined,
			city: undefined,
			fullname: undefined,
			country: undefined,
			zipcode: undefined,
			roles: ['user']
		}
	}

	getProfile(email){ 
		return new Promise( (s, f) => {
			//req.session.user.user.email
			process.firebase.firestore() //Active DB connection
			.collection("users") //Prepare to query users collection (table)
			.where("email", "==", email)
			.get()
			.then((result) => { //array of documents
				let data = [];

				result.forEach((doc) => {
					// doc.data() is never undefined for query doc snapshots
					//console.log(doc.data())

					data.push(doc.data())
					/*
						{
							email:'...',
							phone: '...',
							fullname: '...'....
						}
					*/
				});

				s(data);
			})
			.catch((error) => {
				f(error);
			})
		})
	}

	setProfile(data){
		return new Promise((s, f) => {

			let map = this.constProfile();
			Object.assign(map, data);

			process.firebase.firestore()
			.collection("users")
			.doc(map.email)
			.set(map)
			.then(() => {
				s();
			})
			.catch(error => {
				f(error);
			})
		})
	}

	updateProfile(data){}
}

module.exports = ProfileController;
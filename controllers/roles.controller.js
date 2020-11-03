
class RolesController
{
	getRoles()
	{
		return new Promise((s, f) => {
			process.firebase.firestore()
			.collection("roles")
			.get()
			.then(docRef => {

				let data = [];

				docRef.forEach((doc) => {
					data.push(doc.data());
				});

				s(data);
			})
			.catch(error => {
				console.log(error);
				f(error);
			})
		})
	}

	addRole(data)
	{
		return new Promise((s, f) => {
			process.firebase.firestore()
			.collection("roles")
			.doc(data.name)
			.set(data)
			.then(() => {
				s();
			})
			.catch((error) => {
				console.log(error);
				f(error)
			})
		})
	}
}

module.exports = RolesController;
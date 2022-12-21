import axios from "axios";

const requestAPI = async () => {
	try {
		const res = await axios.get(`http://localhost:4000`);
    return res.data
	} catch (err) {
		console.log(err);
	}
};
const data = await requestAPI()

export const signInPost = async (email, senha) => {
		const body = { email:email, senha:senha };
    const res = await axios.post('http://localhost:4000/signup', body);
		console.log(res)
}




export default data
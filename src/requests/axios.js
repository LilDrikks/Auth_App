import axios from "axios";

const requestAPI = async () => {
	try {
		const res = await axios.get(`https://deploy-node-lildrikks.vercel.app/`, {
			headers: {},
			params: {}
		});
    return res.data
	} catch (err) {
		console.log(err);
	}
};
const data = await requestAPI()



export default data
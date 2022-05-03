import axios from "axios";

const API_URL = "https://catstack.net:8102/api/v1/auth/";

const register = (username, firstName, email, password) => {
	return axios({
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		url: API_URL + 'register',
		withCredentials: false,
		data: {
			username,
			password,
			email,
			firstName
		}
	});
};

const login = (username, password) => {
	return axios.post(API_URL + "login", {
		username,
		password,
	});
};

const logout = () => {
	localStorage.removeItem("user");
};

export default {
	register,
	login,
	logout,
};

import axios from "axios";
import {Redirect} from "react-router-dom";
import React from "react";

const API_URL = "http://catstack.net:8102/api/v1/auth/";

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

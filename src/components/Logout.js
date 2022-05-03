import React from "react";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import AuthService from "../services/auth.service";

const Logout = (props) => {
	const {isLoggedIn} = useSelector(state => state.auth);
	console.log(isLoggedIn)
	if (isLoggedIn) {
		AuthService.logout();
		console.log('logged out')
		window.location.href = '/login'
	}

	return (
		<Redirect to="/login"/>
	)
}

export default Logout
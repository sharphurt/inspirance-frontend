import React from "react";
import {useSelector} from "react-redux";
import {NavLink, Redirect} from 'react-router-dom';

import LoginLogoPanel from "../components/LoginLogoPanel";
import LoginForm from '../components/LoginForm';

const LoginPage = (props) => {
	const {isLoggedIn} = useSelector(state => state.auth);

	if (isLoggedIn) {
		return <Redirect to="/profile"/>;
	}

	return (
		<div>
			<LoginLogoPanel/>
			<div className="form-container">
				<h1 className="create-profile-header">Войти</h1>
				<div className="already-registered-question">
					<div className="already-registered-question-text valign-text-middle mont-regular-normal-black-16px">
						Нет аккаунта?
					</div>
					<div className="login-link-container">
						<NavLink className="link valign-text-middle" to="/register">Зарегистрироваться</NavLink>
					</div>
				</div>
				<div className="social-buttons-container">
					<button className="button google-button">
						<img className="google-icon" src={require('../img/google-logo.svg')}/>
					</button>
					<button className="button vk-button">
						<img className="vk-icon" src={require('../img/vk-logo.svg')}/>
					</button>
				</div>
				<div className="mont-regular-normal-black-16px">или</div>
				<LoginForm />
			</div>
		</div>
	);
};

export default LoginPage;

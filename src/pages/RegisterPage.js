import React from "react";
import './RegisterPage.css';
import RegisterLogoPanel from "../components/RegisterLogoPanel";
import RegisterForm from "../components/RegisterForm";
import {NavLink, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

const RegisterPage = () => {
	const {isLoggedIn} = useSelector(state => state.auth);

	if (isLoggedIn) {
		return <Redirect to="/profile"/>;
	}

	return (
		<div>
			<RegisterLogoPanel/>
			<div className="form-container">
				<h1 className="create-profile-header">Создать профиль</h1>
				<div className="already-registered-question">
					<div className="already-registered-question-text valign-text-middle mont-regular-normal-black-16px">
						Уже есть аккаунт?
					</div>
					<div className="login-link-container">
						<NavLink className="link valign-text-middle" to='/login'>Войти</NavLink>
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

				<RegisterForm />
			</div>
		</div>
	);
};

export default RegisterPage;

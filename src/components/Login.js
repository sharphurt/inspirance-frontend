import React, {useState, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, Redirect, useHistory} from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import {login} from "../actions/auth";
import {isEmail} from "validator";
import LoginLogoPanel from "./LoginLogoPanel";

const required = (value) => {
	if (!value) {
		return (
			<div className="alert alert-danger" role="alert">
				This field is required!
			</div>
		);
	}
};

const vEmail = (value) => {
	if (!isEmail(value)) {
		console.log("email validate")
		return (
			<div className="alert alert-danger" role="alert">
				This is not a valid email.
			</div>
		);
	}
};


const Login = (props) => {
	const form = useRef();
	const checkBtn = useRef();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const {isLoggedIn} = useSelector(state => state.auth);
	const {message} = useSelector(state => state.message);

	const dispatch = useDispatch();

	const onChangeEmail = (e) => {
		const username = e.target.value;
		setEmail(username);
	};

	const onChangePassword = (e) => {
		const password = e.target.value;
		setPassword(password);
	};

	const handleLogin = (e) => {
		e.preventDefault();

		setLoading(true);

		form.current.validateAll();

		if (checkBtn.current.context._errors.length === 0) {
			dispatch(login(email, password))
				.then(() => {
					props.history.push("/profile");
					window.location.reload();
				})
				.catch(() => {
					setLoading(false);
				});
		} else {
			setLoading(false);
		}
	};

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

				<Form className="registration-form" ref={form} onSubmit={handleLogin}>
					<div className="mont-regular-normal-black-16px">или</div>
					<div className="input-container">
						<div className="input-hint">Электронная почта</div>
						<div className="textbox-container">
							<input className="input-shape input-text"
								   type="email"
								   placeholder="example@gmail.com"
								   value={email}
								   onChange={onChangeEmail}
								   validations={[required, vEmail]}/>
						</div>
					</div>

					<div className="input-container">
						<div className="input-hint">Пароль</div>
						<div className="textbox-container">
							<input className="input-shape input-text"
								   type="password"
								   value={password}
								   onChange={onChangePassword}
								   validations={[required]}/>
						</div>
					</div>

					<a className="link valign-text-middle" href="">Забыли пароль?</a>
					<button className="button primary-button">
						<div>Войти</div>
					</button>

					{message && (
						<div className="form-group">
							<div className="alert alert-danger" role="alert">
								{message}
							</div>
						</div>
					)}
					<CheckButton style={{display: "none"}} ref={checkBtn}/>
				</Form>
			</div>
		</div>
	);
};

export default Login;

import React, {useState, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import './Register.css';
import LogoPanel from "./LogoPanel";

import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import {isEmail} from "validator";

import {register} from "../actions/auth";

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

const vPassword = (value) => {
	if (value.length < 6 || value.length > 40) {
		console.log("password validate")
		return (
			<div className="alert alert-danger" role="alert">
				The password must be between 6 and 40 characters.
			</div>
		);
	}
};

const Register = () => {
	const form = useRef();
	const checkBtn = useRef();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [successful, setSuccessful] = useState(false);

	const {message} = useSelector(state => state.message);
	const dispatch = useDispatch();

	const onChangeEmail = (e) => {
		const email = e.target.value;
		setEmail(email);
	};

	const onChangePassword = (e) => {
		const password = e.target.value;
		setPassword(password);
	};

	const handleRegister = (e) => {
		console.log("register")
		e.preventDefault();

		setSuccessful(false);

		form.current.validateAll();

		if (checkBtn.current.context._errors.length === 0) {
			dispatch(register(email, password))
				.then(() => {
					setSuccessful(true);
				})
				.catch(() => {
					setSuccessful(false);
				});
		}
	};

	return (
		<div>
			<LogoPanel/>
			<div className="form-container">
				<h1 className="create-profile-header">Создать профиль</h1>
				<div className="already-registered-question">
					<div className="already-registered-question-text valign-text-middle mont-regular-normal-black-16px">
						Уже есть аккаунт?
					</div>
					<div className="login-link-container">
						<a className="link valign-text-middle" href="">Войти</a>
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

				<Form className="registration-form" ref={form} onSubmit={handleRegister}>
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
								   validations={[required, vPassword]}/>
						</div>
					</div>

					<a className="link valign-text-middle" href="">Забыли пароль?</a>
					<button className="button primary-button">
						<div>Зарегистрироваться</div>
					</button>

					{message && (
						<div className="form-group">
							<div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
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

export default Register;

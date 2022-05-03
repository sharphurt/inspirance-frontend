import React, {useState} from 'react'
import * as Yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from 'react-hook-form'
import AuthService from "../services/auth.service";

let isSuccessful = false;
let loading = false;


const LoginForm = (props) => {
	const yupValidation = Yup.object().shape({
		email: Yup.string().required('Укажите адрес электронной почты').email(),

		password: Yup.string()
			.required('Введите пароль длиной не менее 8 символов')
			.min(8, 'Пароль должен содержать не менее 8 символов')
	})
	const formOptions = {resolver: yupResolver(yupValidation)}
	const {register, handleSubmit, reset, formState} = useForm(formOptions)
	const [message, setMessage] = useState("");
	const {errors} = formState

	function onSubmit(data) {
		AuthService.login(
			data.email,
			data.password
		).then(response => {
				loading = false;
				isSuccessful = response.data.error === null && response.data.response.accessToken != null;
				if (isSuccessful) {
					localStorage.setItem("user", JSON.stringify(response.data.response));
					window.location.href = '/profile'
				} else
					setMessage(response.data.error.message)
				console.log(message)
			}
		);
	}

	return (
		<form className='registration-form' onSubmit={handleSubmit(onSubmit)}>
			<div className="input-container">
				<div className="input-hint">Электронная почта</div>
				<div className="textbox-container">
					<input
						name="email"
						type="text"
						className={`input-shape input-text ${errors.email ? 'is-invalid' : ''}`}
						{...register('email')}
					/>
				</div>
				<div className="invalid-message">{errors.email?.message}</div>
			</div>

			<div className="input-container">
				<div className='input-hint'>Пароль</div>
				<div className="textbox-container">
					<input
						name="password"
						type="password"
						className={`input-shape input-text ${errors.password ? 'is-invalid' : ''}`}
						{...register('password')}
					/>
				</div>
				<div className="invalid-message">{errors.password?.message}</div>
			</div>

			<div className="mt-3">
				<button type="submit" className="button primary-button">
					<div>
						Войти
					</div>
				</button>
			</div>

			{message && (
				<div className="message">
					<div className={'alert alert-danger'} role="alert">
						{message}
					</div>
				</div>
			)}
		</form>
	)
}

export default LoginForm;
import React, {Component} from 'react';
import './LogoPanel.css'

export default class RegisterLogoPanel extends Component {
	render() {
		return (
			<div className="panel">
				<div className="centered">
					<img className="character-img" src={require('../img/character-register.png')}/>
				</div>
				<div className="logo-container">
					<img className="logo" src={require('../img/logo.svg')}/>
					<div className="tagline valign-text-middle">Inspire to be creative</div>
				</div>
			</div>
		)
	}
}
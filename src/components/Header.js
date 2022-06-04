import React, {Component} from "react";
import './Header.css'
import {useSelector} from "react-redux";
import UserService from "../services/user.service";

class Header extends Component {

	state = {
		avatarUrl: null
	}

	constructor(props) {
		super(props);

		this.setState({avatarUrl: null})
	}

	setAvatar() {
		UserService.getPublicContent().then(content => {
			if (content.data.response != null) {
				const avatarUrl = content.data.response['imageUrl']
				this.setState({avatarUrl})
			}
		})
	}

	render() {
		return (
			<div className="header" onLoad={this.setAvatar}>
				<div className="header-content-container">
					<div className="logo-refs-container">
						<a href="\">
							<img className="logo" src={require('../img/logo.svg')}/>
						</a>
						<a className="header-ref" href="/tasks">Задания</a>

						{/*<a className="header-ref challenges" href="">Дизайн-вызов</a>*/}

						{/*<a className="header-ref archive" href="">Архив</a>*/}

						{/*<a className="header-ref about" href="">О нас</a>*/}
					</div>

					<div className="notifications-profile-container">
						<img className="notifications-icon" src={require('../img/notifications.svg')}/>
						<a href="/profile">
							<img className="header-avatar-pic"
								 src={this.state.photo == null ? require('../img/avatar.png') : this.state.photo}/>
						</a>
					</div>
				</div>
			</div>
		)
	}
}

export default Header;
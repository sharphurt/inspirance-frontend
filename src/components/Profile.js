import React, {Component} from "react";
import {Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";
import Header from "./Header";
import UserService from "../services/user.service";
import ProfileUserCard from "./ProfileUserCard";
import CardContainer from "./CardContainer";
import Footer from "./Footer";
import {MyWorks} from "../data/MyWorks";
import {MyProfile} from "../data/MyProfile";

export default class Profile extends Component {

//	user = useSelector((state) => state.auth);

	constructor(props) {
		super(props)

		this.state = {
			data: null
		}
		this.renderProfile()
	}

	renderProfile() {
		UserService.getPublicContent()
			.then(response => this.setState({data: response.data.response}))
			.catch(error => console.log(error))
	}

	render() {
		return (
			<div>
				<Header/>
				<div className="content-container">
					<ProfileUserCard data={MyProfile}/>

					<CardContainer data={{
						text: "Мои работы",
						elements: MyWorks.map(value => value.img)
					}}/>
				</div>
				<div className="footer-container">
					<Footer/>
				</div>
			</div>
		)
	}
}

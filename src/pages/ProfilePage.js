import React, {Component} from "react";
import Header from "../components/Header";
import UserService from "../services/user.service";
import ProfileUserCard from "../components/ProfileUserCard";
import CardContainer from "../components/CardContainer";
import Footer from "../components/Footer";
import {MyWorks} from "../data/MyWorks";
import {MyProfile} from "../data/MyProfile";

export default class ProfilePage extends Component {

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

import React from "react";
import "./Footer.css"

export default function Footer() {
	return (
		<div className="footer">
			<div className="footer-email">hello@inspirance.net</div>
			<div className="social-buttons-container">
				<div className="social-button">
					<img className="social-icon" src={require("../img/telegram.svg")}/>
				</div>
				<div className="social-button">
					<img className="social-icon" src={require("../img/twitter.svg")}/>
				</div>
			</div>
		</div>
	)
}
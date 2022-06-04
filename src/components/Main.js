import {Component} from "react";
import React from "react";
import Header from "./Header";
import "./Main.css"
import TaskContainer from "./TaskContainer";
import PopularWorks from "./PopularWorks";
import Footer from "./Footer";


export default function Main({data}) {
	return (
		<div>
			<Header/>
			<div className="page-content">
				<div className="page-flow">
					<div className="banner">
						<div className="banner-data">
							<div className="banner-header">Вдохновитесь
								на креатив
							</div>
							<div className="banner-text">Выполняйте задания, прокачивайте навыки, становитесь лучше!
							</div>
							<button className="tasks-button">К заданиям</button>
						</div>
						<img className="banner-img" src={require("../img/banner-img.png")}/>
					</div>
					<TaskContainer/>
					<PopularWorks/>
				</div>
			</div>
			<Footer/>

		</div>

	)

}

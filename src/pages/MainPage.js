import {Component} from "react";
import React from "react";
import Header from "../components/Header";
import "./MainPage.css"
import TaskContainer from "../components/TaskContainer";
import PopularWorks from "../components/PopularWorks";
import Footer from "../components/Footer";
import {lastTasks} from "../data/Tasks/LastTasks";
import {AllTasksData} from "../data/Tasks/AllTasks";


export default function MainPage({data}) {

	var tasks = AllTasksData.sort(() => 0.5 - Math.random()).slice(0, 6);
	tasks.showMoreButton = true;
	tasks.header = "Новые задания"

	return (
		<div>
			<Header/>
			<div className="page-content">
				<div className="page-flow">
					<div className="banner">
						<div className="banner-data">
							<div className="banner-header">
								Вдохновитесь <br/>
								на креатив
							</div>
							<div className="banner-text">Выполняйте задания, прокачивайте навыки, становитесь лучше!
							</div>
							<a className="tasks-button" href="\tasks">
								<button className="tasks-button">К заданиям</button>
							</a>
						</div>
						<img className="banner-img" src={require("../img/banner-img.png")}/>
					</div>
					<TaskContainer data={tasks}/>
					<PopularWorks/>
				</div>
				<div className="main-page-footer-container">
					<Footer/>
				</div>
			</div>

		</div>

	)

}

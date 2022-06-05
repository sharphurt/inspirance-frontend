import {Component} from "react";
import React from "react";
import Header from "./Header";
import "./Main.css"
import TaskContainer from "./TaskContainer";
import PopularWorks from "./PopularWorks";
import Footer from "./Footer";
import {lastTasks} from "../data/Tasks/LastTasks";


export default function Main({data}) {

	var tasks = lastTasks;
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
			</div>
			<Footer/>

		</div>

	)

}

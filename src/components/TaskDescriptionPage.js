import React from "react";
import Header from "./Header";
import {getAllByDisplayValue} from "@testing-library/react";
import AboutTask from "./AboutTask";
import MaybeLikes from "./MaybeLikes";


export default function TaskDescriptionPage({data}) {

	return (
		<>
			<Header/>
			<div className="task-description-page-flow">
				<div className="page-header-container">
					<div className="page-header-container-inner">
						<div className="info-container">
							<div className="crumbs">
								<a href="/tasks">Задания</a>
								<div>></div>
								<a href="/tasks">Иллюстрации</a>
							</div>
							<div className="text-info-container">
								<div className="project-name">{data.name}</div>
								<div className="stat-info-container">
									<div className="people-done-counter">{data.peopleDone}</div>
									<div className="people-want-counter">{data.peopleWant}</div>
									<div className="deadline">{data.deadlineText}</div>
								</div>
							</div>
							<button className="upload-button">
								<img className="upload-button-icon" src={require("../img/upload.svg")}/>
								<div className="upload-button-text">Загрузить работу</div>
							</button>
						</div>
						<img className="task-description-image" src={data.img}/>
					</div>
				</div>
				<div className="task-tabs-container">
					<div className="about-tab">О задании</div>
					<div className="works-tab">Работы</div>
				</div>
				<AboutTask data={data}/>
				<MaybeLikes/>
			</div>
		</>

	)

}
import React from "react";
import "./AboutTask.css"
import {useParams,} from "react-router-dom";
import {AllTasksData} from "../data/Tasks/AllTasks";

export default function AboutTask({data}) {

	return (
		<div className="about-task-flow">
			<div className="company-description-container">
				<div className="company-description-header">Описание компании</div>
				<div className="company-description">{data.companyDescription}</div>
			</div>

			<div className="company-description-container">
				<div className="task-description-header">Задание</div>
				<div className="task-description">
					<td dangerouslySetInnerHTML={{__html: data.description}}/>
				</div>
			</div>
		</div>
	)
}
import React, {Component} from "react";
import "./TaskItem.css"

export default function TaskItem({data}) {
	return (
		<a href={`/task/${data.id}`}  className="task-item">
			<div className="data">
				<div className="name-type-container">
					<div className="task-theme">
						{data.themeName}
					</div>
					<div className="task-name">
						{data.name}
					</div>
				</div>

				<div className="works-count-deadline">
					<div className="works-count">
						{data.worksCount}
					</div>
					<div className="deadline">
						{data.deadlineText}
					</div>
				</div>

			</div>
			<img className="task-icon" src={data.img}/>
		</a>
	)
}

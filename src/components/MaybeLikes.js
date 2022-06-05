import React from "react";
import "./MaybeLikes.css"
import {DateSchema} from "yup";
import {lastTasks} from "../data/Tasks/LastTasks";
import TaskItem from "./TaskItem";

export default function MaybeLikes() {

	var maybeLikes = lastTasks.slice(0, 3);

	return (
		<div className="maybe-likes-container">
			<div className="line"/>
			<div className="maybe-likes-inner-container">
				<div className="maybe-likes-header">
					Возможно, вам понравится
				</div>
				<div className="maybe-likes-items-container">
					{
						maybeLikes.map((item) => {
							return <TaskItem data={item}/>
						})
					}
				</div>
			</div>
		</div>
	)
}
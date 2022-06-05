import React from "react";
import {Works} from "../data/Works/Works";
import PopularWorkItemSmall from "./PopularWorkItemSmall";
import "./MoreWorks.css"
import PopularWorkItemLarge from "./PopularWorkItemLarge";

export default function MoreWorks({task}) {

//	var works = Works.filter(work => work.taskId === task.id).sort(() => 0.5 - Math.random()).slice(0, 3);
	var works = Works.sort(() => 0.5 - Math.random()).slice(0, 3);
	return (
		<div className="more-works-container">
			<div className="more-works-inner-container">
				<div className="more-works-header">
					{`Больше работ для ${task.name}`}
				</div>
				<div className="maybe-likes-items-container">
					{
						works.map((item) => {
							return <PopularWorkItemLarge work={item}/>
						})
					}
				</div>
			</div>
		</div>
	)
}

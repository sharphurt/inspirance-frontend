import React from "react";
import PopularWorkItemSmall from "./PopularWorkItemSmall";
import "./WorksContainer.css"
import "./PopularWorks.css"
import {Works} from "../data/Works/Works";

export default function WorksContainer({data, excludedWorkIds}) {

	let works = Works.filter((work) => work.taskId === data.id)
	if (excludedWorkIds !== undefined)
		works = works.filter(work => !excludedWorkIds.includes(work.workId))

	return (
		<div>
			<div className="works-list-container">
				<div className="popular-works-list">
					{
						works.map((element) => (
						<PopularWorkItemSmall data={element}/>
					)).sort(function(a, b) {
							return (a.likes + a.yourLike ? 1 : 0) - (b.likes + b.yourLike ? 1 : 0);
						})}
				</div>
				{
					works.length === 0 ?
						<div className="nothing-found-message">
							Пока что ни один из участников не загрузил свои работы :(
						</div>
						:
						<>
						</>
				}
			</div>
		</div>
	)
}
import React from "react";
import PopularWorkItemSmall from "./PopularWorkItemSmall";
import "./WorksContainer.css"
import "./PopularWorks.css"
import {Works} from "../data/Works/Works";

export default function WorksContainer({data}) {

	const works = Works.filter((work) => work.taskId === data.id)

	return (
		<div>
			<div className="works-list-container">
				<div className="popular-works-list">
					{works.map((element, index) => (
						<PopularWorkItemSmall data={element}/>
					))}
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
import React, {Component, useEffect, useMemo, useState} from "react";
import PopularWorkItem from "./PopularWorkItem";
import "./WorksContainer.css"
import "./PopularWorks.css"
import {Works} from "../data/Works/Works";

export default function WorksContainer({data}) {

	const works = Works.filter((work) => work.taskId === data.id)

	return (
		<div>
			<div className="popular-works-list-container">
				<div className="popular-works-list">
					{works.map((element, index) => (
						<PopularWorkItem data={element}/>
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
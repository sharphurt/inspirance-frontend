import React, {useState} from "react";
import {AllTasksData} from "../data/Tasks/AllTasks";
import {Works} from "../data/Works/Works";

import "./WorkCase.css"
import ImageCarousel from "./ImageCarousel";
import {useParams} from "react-router-dom";
import {WorkImages} from "../data/Works/WorkImages";
import MoreWorks from "./MoreWorks";
import Comments from "./Comments";
import Header from "./Header";
import Footer from "./Footer";

export default function WorkCase() {
	const {workId} = useParams();

	const [likeState, setLikeState] = useState(true)

	let work = Works.filter((work) => work.workId === parseInt(workId))[0]
	let task = AllTasksData.filter((task) => task.id === work.taskId)[0]

	function likeButtonHandler() {
		setLikeState(!likeState)
	}

	return (
		<div className="work-case-page-flow">
			<Header/>
			<div className="work-case-outer-content-container">
				<div className="work-case-content">
					<div className="user-info-like-container">
						<div className="user-info-container">
							<img className="user-info-avatar" src={work.avatarUrl}/>
							<div className="user-info-text">
								<div className="name-subscribe-container">
									<div className="user-info-name">{work.name}</div>
									<button className="subscribe-button">Подписаться</button>
								</div>
								<div className="for-who">для <a href={`/task/${task.id}`} className="for-who-name">{`${task.name}`}</a></div>
							</div>
						</div>
						{
							likeState
								?
								<button className="like-button" onClick={likeButtonHandler}>
									<img className="like-button-icon" src={require("../img/blue-heart.svg")}/>
									<div className="like-button-count">{work.likes}</div>
								</button>
								:
								<button className="like-button-liked" onClick={likeButtonHandler}>
									<img className="like-button-icon" src={require("../img/white-heart.svg")}/>
									<div className="like-button-count-white">{work.likes + 1}</div>
								</button>

						}
					</div>
					<ImageCarousel work={work}/>
					<div className="work-description">
						{work.description}
					</div>
					<MoreWorks task={task}/>
					<Comments work={work}/>
				</div>
			</div>
			<Footer/>
		</div>
	)
}
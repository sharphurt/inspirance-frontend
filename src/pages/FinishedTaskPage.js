import React, {useState} from "react";
import Header from "../components/Header";
import WorksContainer from "../components/WorksContainer";
import AboutTask from "../components/AboutTask";
import MaybeLikes from "../components/MaybeLikes";
import Footer from "../components/Footer";
import {useParams} from "react-router-dom";
import {AllTasksData} from "../data/Tasks/AllTasks";
import {FinishedTasks} from "../data/FinishedTasks";
import {Works} from "../data/Works/Works";
import "./TaskDescriptionPage.css"
import PopularWorkItemXLarge from "../components/PopularWorkItemXLarge";


export default function FinishedTaskPage() {

	const {taskId} = useParams();

	function getTask(id) {
		return AllTasksData.filter((task) => task.id === parseInt(id))[0]
	}

	const task = getTask(taskId);

	const finishedTask = FinishedTasks.filter(t => t.taskId === task.id)[0]

	const firstPlaceWork = Works.filter(work => work.workId === finishedTask.firstPlace)[0]
	const secondPlaceWork = Works.filter(work => work.workId === finishedTask.secondPlace)[0]
	const thirdPlaceWork = Works.filter(work => work.workId === finishedTask.thirdPlace)[0]

	console.log(firstPlaceWork, secondPlaceWork, thirdPlaceWork)
	const peopleDone = Works.filter(work => work.taskId === task.id).length

	const [showWorks, setShowWorks] = useState(false)

	function aboutTaskTabHandler() {
		document.getElementsByClassName("works")[0].id = ""
		document.getElementsByClassName("about-task")[0].id = "selected-tab"
		setShowWorks(false)
	}

	function worksTabHandler() {
		document.getElementsByClassName("works")[0].id = "selected-tab"
		document.getElementsByClassName("about-task")[0].id = ""
		setShowWorks(true)
	}

	return (
		<div className="finished-task-page-flow">
			<Header/>
			<div className="finished-task-content-container">
				<div className="task-description-content">
					<div className="page-header-container">
						<div className="page-header-container-inner">
							<div className="info-container">
								<div className="crumbs">
									<a href="/tasks">Задания</a>
									<div>></div>
									<a href={`/tasks?filter=${task.themeName}`}>{task.themeName}</a>
								</div>
								<div className="text-info-container">
									<div className="project-name">{task.name}</div>
									<div className="stat-info-container">
										<div className="people-done-counter">{peopleDone} сделали</div>
										<div className="deadline">
											Завершено {finishedTask.whenFinished}
										</div>
									</div>
								</div>
								<div className="winner-container">
									<img className="winner-avatar" src={firstPlaceWork.avatarUrl}/>
									<div className="winner-name-header">
										Победитель <br/>
										<div className="winner-name">
											{firstPlaceWork.name}
										</div>
									</div>
								</div>
								{/*<button className="upload-button button primary-button"*/}
								{/*		onClick={uploadWorkButtonHandler}>*/}
								{/*	<img className="upload-button-icon" src={require("../img/upload.svg")}/>*/}
								{/*	<div className="upload-button-text">Загрузить работу</div>*/}
								{/*</button>*/}

							</div>
							<img className="task-description-image" src={task.img}/>
						</div>
					</div>
					<div className="task-tabs-container">
						<button id="selected-tab" className="unselected-tab about-task" onClick={aboutTaskTabHandler}>О
							задании
						</button>
						<button className="unselected-tab works" onClick={worksTabHandler}>Работы</button>
					</div>
					{
						showWorks
							?
							<div className="finished-task-works-container">
								<div className="leader-works-container">
									<PopularWorkItemXLarge work={firstPlaceWork} place={1}/>
									<PopularWorkItemXLarge work={secondPlaceWork} place={2}/>
									<PopularWorkItemXLarge work={thirdPlaceWork} place={3}/>
								</div>

								<div className="people-works-container">
									<WorksContainer data={task} excludedWorkIds={[
										firstPlaceWork.workId,
										secondPlaceWork.workId,
										thirdPlaceWork.workId
									]}/>
								</div>
							</div>
							: <>
								<AboutTask data={task}/>
								<MaybeLikes/>
							</>
					}

				</div>
			</div>
			<Footer/>
		</div>
	)

}
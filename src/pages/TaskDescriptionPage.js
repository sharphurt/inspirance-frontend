import React, {useState} from "react";
import Header from "../components/Header";
import AboutTask from "../components/AboutTask";
import MaybeLikes from "../components/MaybeLikes";
import {useHistory, useLocation, useParams} from "react-router-dom";
import {AllTasksData} from "../data/Tasks/AllTasks";
import "./TaskDescriptionPage.css"
import Footer from "../components/Footer";
import WorksContainer from "../components/WorksContainer";

export default function TaskDescriptionPage() {


	function useQuery() {
		const { search } = useLocation();
		return React.useMemo(() => new URLSearchParams(search), [search]);
	}

	let query = useQuery();

	let tab = query.get("tab")

	const {taskId} = useParams();

	function getTask(id) {
		return AllTasksData.filter((task) => task.id === parseInt(id))[0]
	}

	const task = getTask(taskId);

	const [showWorks, setShowWorks] = useState(tab === "works")

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

	let history = useHistory();

	function uploadWorkButtonHandler() {
		history.push(`/upload?task=${task.id}`);
	}

	return (
		<div className="task-description-page-flow">
			<Header/>
			<div className="task-description-content-container">
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
										<div className="people-done-counter">{task.peopleDone} сделали</div>
										<div className="people-want-counter">{task.peopleWant} хотят сделать</div>
										<div className="deadline">
											{task.deadline === 1
												? 'Остался '
												: 'Осталось '
											}
											{task.deadlineText}
										</div>
									</div>
								</div>
								<button className="upload-button button primary-button"
										onClick={uploadWorkButtonHandler}>
									<img className="upload-button-icon" src={require("../img/upload.svg")}/>
									<div className="upload-button-text">Загрузить работу</div>
								</button>
							</div>
							<img className="task-description-image" src={task.img}/>
						</div>
					</div>
					{
						showWorks
							? <div className="task-tabs-container">
								<button className="unselected-tab about-task"
										onClick={aboutTaskTabHandler}>О
									задании
								</button>
								<button id="selected-tab" className="unselected-tab works" onClick={worksTabHandler}>Работы</button>
							</div>
							: <div className="task-tabs-container">
								<button id="selected-tab" className="unselected-tab about-task"
										onClick={aboutTaskTabHandler}>О
									задании
								</button>
								<button className="unselected-tab works" onClick={worksTabHandler}>Работы</button>
							</div>
					}
					{
						showWorks
							?
							<div className="task-description-works-container">
								<WorksContainer data={task}/>
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
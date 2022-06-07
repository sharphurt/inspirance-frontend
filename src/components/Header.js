import React, {Component, useState} from "react";
import './Header.css'
import {Notifications} from "../data/Notifications";
import {AllTasksData} from "../data/Tasks/AllTasks";
import "./Notifications.css"

export default function Header() {

	const [notificationsOpened, setNotificationsOpened] = useState(false)

	function openNotifications() {
		setNotificationsOpened(true)
		document.addEventListener("click", handleOutsideClick, false);
	}

	function handleOutsideClick(e) {
		closeNotifications();
		document.removeEventListener("click", handleOutsideClick, false);
	}

	function closeNotifications() {
		setNotificationsOpened(false)
	}

	return (
		<div className="header">
			<div className="header-content-container">
				<div className="logo-refs-container">
					<a href="\">
						<img className="logo" src={require('../img/logo.svg')}/>
					</a>
					<a className="header-ref" href="/tasks">Задания</a>
				</div>

				<div className="notifications-profile-container">
					<button onClick={openNotifications}>
						<img className="notifications-icon" src={require('../img/notifications.svg')}/>
					</button>
					<a href="/profile">
						<img className="header-avatar-pic"
							 src={require('../img/avatar.png')}/>
					</a>
				</div>
				{
					notificationsOpened === true
						? <div id="notifications-outer-container" className="notifications-outer-container">
							<div className="notifications-container">
								{
									Notifications.map(n => {
											var task = AllTasksData.filter(t => t.id === n.taskId)[0]
											console.log(task)
											if (n.notificationType === "like") {
												return (
													<div className="notification">
														<div className="notification-horizontal-container">
															<img className="notification-image" src={n.imageUrl}/>

															<div className="notification-info-container">
																<div className="notification-text">
																	Пользователь {n.who} оценил вашу <a
																	href={`/work/${n.workId}`}>работу</a> для <a
																	href={`/task/${n.taskId}`}>{task.name}</a>
																</div>
																<div className="notification-when">{n.when}</div>
															</div>
														</div>
													</div>
												)
											} else {
												return (
													<div className="notification">
														<div className="notification-horizontal-container">
															<img className="notification-image" src={n.imageUrl}/>
															<div className="notification-info-container">
																<div className="notification-text">
																	Конкурс работ для <a
																	href={`/task/${n.taskId}`}>{task.name}</a> окончен<br/>
																	Ваше место: {n.score}<br/>
																	<a href={`/task/${n.taskId}?tab=works`}>Посмотрите</a>, кто
																	победил
																</div>
																<div className="notification-when">{n.when}</div>
															</div>
														</div>

													</div>
												)
											}
										}
									)
								}
							</div>
						</div>
						: <></>
				}
			</div>
		</div>
	)
}
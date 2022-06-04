import React, {Component, useEffect, useMemo, useState} from "react";
import TaskItem from "./TaskItem";
import "./TaskContainer.css"

export default function TaskContainer({data}) {
	const [taskList, setTaskList] = useState([]);

	const [selectedCategory, setSelectedCategory] = useState();

	useEffect(() => {
		setTaskList(data);
	}, [data]);

	function getFilteredList(tasks) {
		if (!selectedCategory) {
			return taskList;
		}
		return tasks.filter((item) => item.themeName === selectedCategory);
	}

	function handleFilter(e) {
		let category = e.target.value;
		var buttons = document.getElementsByClassName("select-button")
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].id = ""
		}
		e.target.id = "selected"
		setSelectedCategory(category)
	}


	return (
		<div className="task-container">
			{/*{console.log(getFilteredList())}*/}
			<div className="task-container-name">
				{data.header}
			</div>
			<div className="task-filter">
				<div className="filter-buttons-container">
					<button className="select-button" id="selected" value="" onClick={handleFilter}>Все</button>
					<button className="select-button" value="Иллюстрации" onClick={handleFilter}>Иллюстрации</button>
					<button className="select-button" value="Логотипы" onClick={handleFilter}>Логотипы</button>
					<button className="select-button" value="Сайты" onClick={handleFilter}>Сайты</button>
					<button className="select-button" value="Айдентика" onClick={handleFilter}>Айдентика</button>
					<button className="select-button" value="Упаковка" onClick={handleFilter}>Упаковка</button>
					<button className="select-button" value="Баннеры" onClick={handleFilter}>Баннеры</button>
				</div>


				<div className="task-list-container">
					<div className="task-list">
						{getFilteredList(data).map((element, index) => (
							<TaskItem data={element}/>
						))}
					</div>
					{
						getFilteredList(data).length === 0 ?
							<div className="nothing-found-message">
								Ничего не найдено :^(
							</div>
							:
							<>
							</>
					}
				</div>

			</div>
			{
				data.showMoreButton ?
					<div className="button-container">
						<a href="\tasks">
							<button className="show-more-button">Показать еще</button>
						</a>
					</div>
					:
					<>
					</>
			}
		</div>
	)

}
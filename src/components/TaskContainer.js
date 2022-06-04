import React, {Component, useEffect, useMemo, useState} from "react";
import TaskItem from "./TaskItem";
import "./TaskContainer.css"

export default function TaskContainer({data}) {

	const defaultTasks = [
		{
			name: "Coffee Team",
			themeName: "Логотипы",
			deadline: "3 дня",
			worksCount: "12 работ",
			img: require("../img/tasks/cup.png")
		},
		{
			name: "Color Global",
			themeName: "Сайты",
			deadline: "6 дней",
			worksCount: "14 работ",
			img: require("../img/tasks/bucket.png")
		},
		{
			name: "Crown Company",
			themeName: "Упаковка",
			deadline: "4 дня",
			worksCount: "7 работ",
			img: require("../img/tasks/crown.png")
		},
		{
			name: "Red Inc.",
			themeName: "Баннеры",
			deadline: "5 дней",
			worksCount: "11 работ",
			img: require("../img/tasks/fire.png")
		},
		{
			name: "Cat Family",
			themeName: "Иллюстрации",
			deadline: "3 дня",
			worksCount: "10 работ",
			img: require("../img/tasks/hat.png")
		},
		{
			name: "Apple Pie",
			themeName: "Иллюстрации",
			deadline: "4 дня",
			worksCount: "21 работа",
			img: require("../img/tasks/pie.png")
		},
	]

	const [taskList, setTaskList] = useState([]);

	const [selectedCategory, setSelectedCategory] = useState();

	useEffect(() => {
		setTaskList(defaultTasks);
	}, []);

	function getFilteredList() {
		// Avoid filter when selectedCategory is null
		if (!selectedCategory) {
			return taskList;
		}
		return taskList.filter((item) => item.themeName === selectedCategory);
	}

	function handleFilter(e) {
		let category = e.target.value;
		var buttons = document.getElementsByClassName("select-button")
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].id = ""
		}

		e.target.id = "selected"
		setSelectedCategory(category)
		category !== "Все"
			? getFilteredList(category)
			: getFilteredList("");
	}

	var filteredList = useMemo(getFilteredList, [selectedCategory, taskList]);

	return (
		<div className="task-container">
			<div className="task-container-name">
				Новые задания
			</div>
			<div className="task-filter">
				<div className="filter-buttons-container">
					<button className="select-button" value="" onClick={handleFilter}>Все</button>
					<button className="select-button" value="Иллюстрации" onClick={handleFilter}>Иллюстрации</button>
					<button className="select-button" value="Логотипы" onClick={handleFilter}>Логотипы</button>
					<button className="select-button" value="Сайты" onClick={handleFilter}>Сайты</button>
					<button className="select-button" value="Айдентика" onClick={handleFilter}>Айдентика</button>
					<button className="select-button" value="Упаковка" onClick={handleFilter}>Упаковка</button>
					<button className="select-button" value="Баннеры" onClick={handleFilter}>Баннеры</button>
				</div>


				<div className="task-list-container">
					<div className="task-list">
						{filteredList.slice(0, 6).map((element, index) => (
							<TaskItem data={element}/>
						))}
					</div>
					{
						filteredList.slice(0, 6).length === 0 ?
							<div className="nothing-found-message">
								Ничего не найдено :^(
							</div>
							:
							<>
							</>
					}
				</div>

			</div>
			<div className="button-container">
				<button className="show-more-button">Показать еще</button>
			</div>
		</div>
	)

}
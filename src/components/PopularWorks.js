import React, {Component, useEffect, useMemo, useState} from "react";
import TaskItem from "./TaskItem";
import "./TaskContainer.css"
import "./PopularWorks.css"
import PopularWorkItem from "./PopularWorkItem";

export default function PopularWorks({data}) {

	const defaultTasks = [
		{
			name: "Любовь Самойлова",
			likes: 141,
			avatarUrl: require("../img/avatars/avatar-1.png"),
			preview: require("../img/popular-works/1.png"),
			themeName: "Сайты"
		},
		{
			name: "Егор Ракитов",
			likes: 127,
			avatarUrl: require("../img/avatars/avatar-2.png"),
			preview: require("../img/popular-works/2.png"),
			themeName: "Иллюстрации"
		},
		{
			name: "Евгений Печкин",
			likes: 86,
			avatarUrl: require("../img/avatars/avatar-3.png"),
			preview: require("../img/popular-works/3.png"),
			themeName: "Логотипы"
		},
		{
			name: "Дарья Любимова",
			likes: 78,
			avatarUrl: require("../img/avatars/avatar-4.png"),
			preview: require("../img/popular-works/4.png"),
			themeName: "Иллюстрации"
		},

	]

	const [worksList, setWorksList] = useState([]);

	const [selectedCategory, setSelectedCategory] = useState();

	useEffect(() => {
		setWorksList(defaultTasks);
	}, []);

	function getFilteredList() {
		// Avoid filter when selectedCategory is null
		if (!selectedCategory) {
			return worksList;
		}
		return worksList.filter((item) => item.themeName === selectedCategory);
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

	var filteredList = useMemo(getFilteredList, [selectedCategory, worksList]);

	return (
		<div className="task-container">
			<div className="task-container-name">
				Популярные работы
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


				<div className="popular-works-list-container">
					<div className="popular-works-list">
						{filteredList.slice(0, 4).map((element, index) => (
							<PopularWorkItem data={element}/>
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
		</div>
	)

}
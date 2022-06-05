import React from "react";
import "./AllTasks.css"
import {useState} from "react";
import {
	BrowserRouter as Router,
	Link,
	useLocation
} from "react-router-dom";

import MultiRangeSlider from "multi-range-slider-react";
import Header from "./Header";
import TaskContainer from "./TaskContainer";
import Footer from "./Footer";
import {AllTasksData} from "../data/Tasks/AllTasks";

export default function AllTasks() {
	const [minValue, set_minValue] = useState(3);
	const [maxValue, set_maxValue] = useState(20);

	const [tasks, setTasks] = useState(AllTasksData)
	const [category, setCategory] = useState("")

	const handleSlider = (e) => {
		set_minValue(e.minValue);
		set_maxValue(e.maxValue);
		document.getElementsByClassName("date-picker-value")[0].innerHTML = `От ${e.minValue} до ${e.maxValue} дней`
		setTasks(getFiltered(category, e.minValue, e.maxValue))
	};

	function useQuery() {
		const { search } = useLocation();

		return React.useMemo(() => new URLSearchParams(search), [search]);
	}

	function getFiltered(category, minDate, maxDate) {
		let categoryFiltered;
		if (category === "") {
			categoryFiltered = AllTasksData;
		} else {
			categoryFiltered = AllTasksData.filter((task) => task.category === category)
		}

		return categoryFiltered.filter((task) => task.deadline >= minDate && task.deadline <= maxDate)
	}

	function radioButtonHandle(e) {
		setTasks(getFiltered(e.target.value, minValue, maxValue))
		setCategory(e.target.value)
	}

	tasks.header = "Задания для вас"

	let query = useQuery();

	tasks.categoryFilter = query.get("filter")

	return (
		<div className="all-tasks-pageflow">
			<Header/>
			<div className="content-without-footer-container">
				<div className="all-tasks-content">
					<div className="menu">
						<div className="rb-group-container">
							<div className="menu-header">Тематика</div>

							<div className="rb-group">
								<label className="radio-button">
									<div className="rb-container">
										<input name="menu-rb" className="radio-button-thumb" type="radio" value=""
											   onChange={radioButtonHandle} defaultChecked={true}/>
										<span className="checkmark"></span>
									</div>
									Все
								</label>

								<label className="radio-button">
									<div className="rb-container">
										<input name="menu-rb" className="radio-button-thumb" type="radio"
											   value="Technologies"
											   onChange={radioButtonHandle}></input>
										<span className="checkmark"></span>
									</div>
									Технологии
								</label>


								<label className="radio-button">
									<div className="rb-container">
										<input name="menu-rb" className="radio-button-thumb" type="radio" value="Food"
											   onChange={radioButtonHandle}></input>
										<span className="checkmark"></span>
									</div>
									Еда
								</label>

								<label className="radio-button">
									<div className="rb-container">
										<input name="menu-rb" className="radio-button-thumb" type="radio"
											   value="Fashion"
											   onChange={radioButtonHandle}></input>
										<span className="checkmark"></span>
									</div>
									Мода
								</label>

								<label className="radio-button">
									<div className="rb-container">
										<input name="menu-rb" className="radio-button-thumb" type="radio" value="Sport"
											   onChange={radioButtonHandle}></input>
										<span className="checkmark"></span>
									</div>
									Спорт
								</label>

								<label className="radio-button">
									<div className="rb-container">
										<input name="menu-rb" className="radio-button-thumb" type="radio"
											   value="Education"
											   onChange={radioButtonHandle}></input>
										<span className="checkmark"></span>
									</div>
									Образование
								</label>
							</div>
						</div>

						<div className="date-picker-container">
							<div className="menu-header">Срок</div>
							<div className="date-picker-value">
								От 3 до 15 дней
							</div>
							<MultiRangeSlider className="multi-range-slider"
											  min={1}
											  max={30}
											  step={1}
											  ruler={false}
											  label={false}
											  preventWheel={true}
											  minValue={minValue}
											  maxValue={maxValue}
											  onChange={(e) => {
												  handleSlider(e);
											  }}
											  onInput={(e) => {
												  handleSlider(e);
											  }}
							/>
						</div>
						{/*</div>*/}
					</div>

					<div id="tasks" className="tasks">
						<TaskContainer data={tasks}/>
					</div>
				</div>
			</div>
			<Footer/>

		</div>
	)
}
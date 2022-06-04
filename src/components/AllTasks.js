import React, {Component, useMemo} from "react";
import ReactDOM from "react-dom";
import "./AllTasks.css"
import {useState} from "react";

import MultiRangeSlider from "multi-range-slider-react";
import Header from "./Header";
import TaskContainer from "./TaskContainer";
 import {EducationTasks} from "../data/Tasks/Education";
import {FashionTasks} from "../data/Tasks/Fashion";
import {FoodTasks} from "../data/Tasks/Food";
import {SportTasks} from "../data/Tasks/Sport";
import {TechnologiesTasks} from "../data/Tasks/Technologies";
import Footer from "./Footer";

export default function AllTasks() {
	const [minValue, set_minValue] = useState(3);
	const [maxValue, set_maxValue] = useState(20);

	var allTasks = EducationTasks.concat(FashionTasks).concat(FoodTasks).concat(SportTasks).concat(TechnologiesTasks)

	const [tasks, setTasks] = useState(allTasks)
	const [category, setCategory] = useState("")

	const handleSlider = (e) => {
		set_minValue(e.minValue);
		set_maxValue(e.maxValue);
		document.getElementsByClassName("date-picker-value")[0].innerHTML = `От ${e.minValue} до ${e.maxValue} дней`
		setTasks(getFiltered(category, e.minValue, e.maxValue))
	};

	function getFiltered(category, minDate, maxDate) {
		let categoryFiltered;
		if (category === "") {
			categoryFiltered = allTasks;
		} else {
			categoryFiltered = allTasks.filter((task) => task.category === category)
		}

		return categoryFiltered.filter((task) => task.deadline >= minDate && task.deadline <= maxDate)
	}

	function radioButtonHandle(e) {
		setTasks(getFiltered(e.target.value, minValue, maxValue))
		setCategory(e.target.value)
	}

	tasks.header = "Задания для вас"

	return (
		<>
			<Header/>
			<div>
				<div className="menu-container">
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
					</div>
				</div>

				<div id="tasks" className="tasks">
					{console.log(tasks)}
					<TaskContainer data={tasks}/>
				</div>
			</div>
			<div className="footer-container footer-container-1">
				<Footer/>
			</div>
		</>
	)
}
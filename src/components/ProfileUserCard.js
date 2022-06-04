import React, {Component} from "react";
import {Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";

import './Profile.css'


export default function ProfileUserCard({data}) {
	return <div className="profile-user-card">
		<div className="main-container">
			<div className="avatar-name-container">
				<img className="user-card-avatar" src={data.src}/>
				<div className="name">Имя Фамилия</div>
				<div className="about">Обо мне и моя почта ага да</div>
			</div>


			<button className="button primary-button">
				<div>
					Редактировать профиль
				</div>
			</button>

			<div className="stat-table">
				<div className="stat-table-row row-1">
					<div className="stat-table-text-left">Оценки</div>
					<div className="stat-table-text-right likes">2941</div>
				</div>

				<div className="stat-table-row row-2">
					<div className="stat-table-text-left">Подписчики</div>
					<div className="stat-table-text-right subscribers">12043</div>
				</div>

				<div className="stat-table-row row-3">
					<div className="stat-table-text-left">Подписки</div>
					<div className="stat-table-text-right subscribes">03592</div>
				</div>
			</div>

			<div className="awards-container">
				<div className="awards-header">Награды</div>
				<div className="award-item-container">
					<div className="award-item">
						<img className="award-icon" src={require("../img/star.png")} />
						<div className="award-text">1</div>
					</div>
					{/*{[...Array(data.)]}*/}
				</div>
			</div>
		</div>
	</div>
}

import React, {Component} from "react";
import {Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";

import '../pages/ProfilePage.css'


export default function ProfileUserCard({data}) {
	return <div className="profile-user-card">
		<div className="main-container">
			<div className="avatar-name-container">
				<img className="user-card-avatar" src={data.avatarUrl}/>
				<div className="name">{data.name}</div>
				<div className="about">{data.about}</div>
			</div>


			<button className="button primary-button">
				<div>
					Редактировать профиль
				</div>
			</button>

			<div className="stat-table">
				<div className="stat-table-row row-1">
					<div className="stat-table-text-left">Оценки</div>
					<div className="stat-table-text-right likes">{data.likes}</div>
				</div>

				<div className="stat-table-row row-2">
					<div className="stat-table-text-left">Подписчики</div>
					<div className="stat-table-text-right subscribers">{data.subscribers}</div>
				</div>

				<div className="stat-table-row row-3">
					<div className="stat-table-text-left">Подписки</div>
					<div className="stat-table-text-right subscribes">{data.subscribes}</div>
				</div>
			</div>

			<div className="awards-container">
				<div className="awards-header">Награды</div>
				<div className="award-item-container">
					{
						data.awards.map(value => {
						return (
							<div className="award-item">
								<img className="award-icon" src={value.imageUrl}/>
								<div className="award-text">{value.name}</div>
							</div>
						)})
					}
					{/*{[...Array(data.)]}*/}
				</div>
			</div>
		</div>
	</div>
}

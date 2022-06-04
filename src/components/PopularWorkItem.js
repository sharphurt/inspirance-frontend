import React, {Component} from "react";
import "./PopularWorkItem.css"


export default function PopularWorkItem({data}) {
	return (
		<div className="item-container">
			<img className="preview" src={data.preview} />
			<div className="item-info">
				<div className="avatar-container">
					<img className="avatar" src={data.avatarUrl}/>
					<div className="author">{data.name}</div>
				</div>
				<div className="likes-container">
					<img className="like-icon" src={require("../img/heart.svg")} />
					<div className="likes-count">{data.likes}</div>
				</div>
			</div>
		</div>
	)

}
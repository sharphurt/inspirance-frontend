import React, {Component} from "react";
import "./PopularWorkItemSmall.css"


export default function PopularWorkItemSmall({data: work}) {
	return (
		<a href={`/work/${work.workId}`} className="item-container-small">
			<img className="preview" src={work.preview} />
			<div className="item-info">
				<div className="avatar-container">
					<img className="avatar" src={work.avatarUrl}/>
					<div className="author">{work.name}</div>
				</div>
				<div className="likes-container">
					<img className="like-icon" src={require("../img/heart.svg")} />
					<div className="likes-count">{work.likes}</div>
				</div>
			</div>
		</a>
	)

}
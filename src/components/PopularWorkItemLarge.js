import React, {Component} from "react";
import "./PopularWorkItemLarge.css"


export default function PopularWorkItemLarge({work}) {
	return (
		<a href={`/work/${work.workId}`} className="item-container-large">
			<img className="preview-large" src={work.preview} />
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
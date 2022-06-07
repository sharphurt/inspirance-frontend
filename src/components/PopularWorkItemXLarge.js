import React, {Component} from "react";
import "./PopularWorkItemXLarge.css"


export default function PopularWorkItemXLarge({work, place}) {
	return (
		<a href={`/work/${work.workId}`} className="item-container-x-large">
			<div className="place-indicator">{place}</div>
			<img className="preview-x-large" src={work.preview} />
			<div className="item-info">
				<div className="avatar-container">
					<img className="avatar" src={work.avatarUrl}/>
					<div className="author">{work.name}</div>
				</div>
				<div className="likes-container">
					<img className="like-icon" src={require("../img/heart.svg")} />
					<div className="likes-count">{work.likes + (work.yourLike ? 1 : 0)}</div>
				</div>
			</div>
		</a>
	)

}
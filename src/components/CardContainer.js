import React, {Component} from "react";
import "./CardContainer.css"
import ImageCard from "./ImageCard";

export default function CardContainer({data}) {

	return(
		<div className="cards-container">
			<div className="cards-container-name">
				{data.text}
			</div>

			<div className="cards">
				{data.elements.map((value) => {
					return <ImageCard data={{
						src: value.img,
						link: `/work/${value.workId}`
					}} />
				})}
			</div>
		</div>
	)

}
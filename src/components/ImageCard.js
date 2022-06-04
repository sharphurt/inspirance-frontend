import React, {Component} from "react";
import "./ImageCard.css"

export default function ImageCard({data}) {
	return (
		<a href={data.link}>
			<img className="card"  src={data.src}/>
		</a>
	)

}
import React, {useState} from "react";
import "./AboutTask.css"
import {WorkImages} from "../data/Works/WorkImages";
import "./ImageCarousel.css"

export default function ImageCarousel({work}) {
	let workImages = WorkImages.filter(imagesData => imagesData.workId === work.workId)[0]

	if (workImages === undefined)
		workImages = [
			{
				thumbnail: work.preview,
				original: work.preview
			}
		]
	else
		workImages = workImages.images

	const [currentImage, setCurrentImage] = useState(workImages[0])
	const [currentImageIndex, setCurrentImageIndex] = useState(0)
	console.log(currentImage)

	function backwardButtonHandler() {
		let index = currentImageIndex - 1;
		if (index < 0)
			index = workImages.length - 1;
		if (index >= workImages.length)
			index = 0
		setCurrentImageIndex(index);
		setCurrentImage(workImages[index])
	}

	function forwardButtonHandler() {
		let index = currentImageIndex + 1;
		if (index < 0)
			index = workImages.length - 1;
		if (index >= workImages.length)
			index = 0
		setCurrentImageIndex(index);
		setCurrentImage(workImages[index])
	}

	function thumbnailButtonHandler(index) {
		setCurrentImage(workImages[parseInt(index)])
		setCurrentImageIndex(parseInt(index))
	}

	return (
		<div className="carousel-container">
			<div className="main-image-container">
				<button className="button-image-back image-carousel-button" onClick={backwardButtonHandler}>
					<img className="button-image-back-icon" src={require("../img/back.svg")}/>
				</button>
				<img className="main-image" src={currentImage.original}/>
				<button className="button-image-forward image-carousel-button" onClick={forwardButtonHandler}>
					<img className="button-image-forward-icon" src={require("../img/forward.svg")}/>
				</button>
			</div>
			<div className="thumbnails-container">
				{
					workImages.map((image, index) => {
						return (
							<button className="thumbnail-button" value={index}
									onClick={(_) => thumbnailButtonHandler(`${index}`)}>
								<div className="thumbnail-container">
									{
										currentImageIndex === index
											? <img className="thumbnail" id="selected-thumbnail" src={image.thumbnail}/>
											: <img className="thumbnail" src={image.thumbnail}/>
									}
								</div>
							</button>)
					})
				}
			</div>
		</div>
	)
}
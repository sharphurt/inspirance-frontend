import React, {useState} from "react";
import "./AboutTask.css"
import {WorkImages} from "../data/Works/WorkImages";
import "./ImageCarousel.css"

export default function ImageCarouselWithUpload({firstImage, onAddImage}) {

	const [images, setImages] = useState([firstImage])

	const [currentImage, setCurrentImage] = useState(images[0])
	const [currentImageIndex, setCurrentImageIndex] = useState(0)

	function backwardButtonHandler() {
		let index = currentImageIndex - 1;
		if (index < 0)
			index = images.length - 1;
		if (index >= images.length)
			index = 0
		setCurrentImageIndex(index);
		setCurrentImage(images[index])
	}

	function forwardButtonHandler() {
		let index = currentImageIndex + 1;
		if (index < 0)
			index = images.length - 1;
		if (index >= images.length)
			index = 0
		setCurrentImageIndex(index);
		setCurrentImage(images[index])
	}

	function thumbnailButtonHandler(index) {
		setCurrentImage(images[parseInt(index)])
		setCurrentImageIndex(parseInt(index))
	}

	function addImageButtonHandler(event) {
		const file = event.target.files[0]
		if (file === undefined)
			return
		var reader = new FileReader();
		reader.onload = (function(aImg) {
			setImages([...images, aImg.target.result]);
			onAddImage([...images, aImg.target.result])
		});
		reader.readAsDataURL(file);
	}

	return (
		<div className="carousel-container">
			<div className="main-image-container">
				<button className="button-image-back image-carousel-button" onClick={backwardButtonHandler}>
					<img className="button-image-back-icon" src={require("../img/back.svg")}/>
				</button>
				<img className="main-image" src={currentImage}/>
				<button className="button-image-forward image-carousel-button" onClick={forwardButtonHandler}>
					<img className="button-image-forward-icon" src={require("../img/forward.svg")}/>
				</button>
			</div>
			<div className="thumbnails-container">
				{
					images.map((image, index) => {
						return (
							<button className="thumbnail-button" value={index} key={index}
									onClick={(_) => thumbnailButtonHandler(`${index}`)}>
								<div className="thumbnail-container">
									{
										currentImageIndex === index
											? <img className="thumbnail" id="selected-thumbnail" src={image}/>
											: <img className="thumbnail" src={image}/>
									}
								</div>
							</button>)
					})
				}
				{
					images.length === 5
						? <></>
						: <label className="add-image-button-container">
							<input type="file"
								   accept="image/png, image/jpeg, image/gif"
								   className="add-image-button"
								   onChange={addImageButtonHandler}/>
							<img className="add-image-button-icon" src={require("../img/plus.svg")}/>
						</label>
				}

			</div>
		</div>
	)
}
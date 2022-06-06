import React from "react";
import ls from 'local-storage'

import {useState} from "react";
import ImageCarouselWithUpload from "../components/ImageCarouselWithUpload";
import {useHistory, useLocation} from "react-router-dom";
import {AllTasksData} from "../data/Tasks/AllTasks";
import "./AddWorkPage.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
import {MyWorks} from "../data/MyWorks";
import {Works} from "../data/Works/Works";
import {WorkImages} from "../data/Works/WorkImages";

export default function AddWorkPage() {
	const [uploadedImages, setUploadedImages] = useState([])
	const [aboutWork, setAboutWork] = useState("")

	function firstTimeUploadHandler(event) {
		const file = event.target.files[0]
		if (file === undefined)
			return
		const reader = new FileReader();
		reader.onload = (function (aImg) {
			setUploadedImages([...uploadedImages, aImg.target.result])
		});
		reader.readAsDataURL(file);
	}

	function onAddImage(images) {
		setUploadedImages(images)
	}

	function changeAboutWorkHandler(event) {
		setAboutWork(event.target.value)
	}

	function useQuery() {
		const {search} = useLocation();
		return React.useMemo(() => new URLSearchParams(search), [search]);
	}

	let query = useQuery();

	const taskId = parseInt(query.get("task"))
	const task = AllTasksData.filter(task => task.id === taskId)[0]

	let history = useHistory();

	function uploadButtonHandler() {
		const thisWorkId = Math.max(...Works.map(work => work.workId)) + 1
		console.log(thisWorkId)
		Works.push({
			taskId: task.id,
			workId: thisWorkId,
			name: "Константин Иванов",
			avatarUrl: require("../img/avatar.png"),
			preview: uploadedImages[0],
			themeName: task.themeName,
			description: aboutWork,
			likes: 0
		})

		const images = uploadedImages.map(value => {
			return ({
				original: value,
			})
		})

		WorkImages.push({
			workId: thisWorkId,
			images: images
		})

		MyWorks.push({
			workId: thisWorkId
		})

		localStorage.setItem('Works', JSON.stringify(Works));
		localStorage.setItem("WorkImages", JSON.stringify(WorkImages))
		localStorage.setItem("MyWorks", JSON.stringify(MyWorks))

		history.push(`/work/${thisWorkId}`);
	}

	return (
		<div className="add-work-page-flow">
			<Header/>
			<div className="upload-work-outer-container">
				<div className="upload-work-container">
					<div className="cancel-upload-work-buttons-container">
						<a href={`/task/${task.id}`} className="cancel-uploading-button">
							Отмена
						</a>

						<div className="upload-button-container">
							<button className="upload-button button primary-button"
									onClick={uploadButtonHandler}
									disabled={uploadedImages.length === 0 || aboutWork === "" || aboutWork === undefined}>
								<span className="upload-button-icon"/>
								<div className="upload-button-text">Загрузить работу</div>
							</button>
						</div>

					</div>

					<div className="upload-work-form-container">
						<div className="upload-work-header">Загрузить работы к заданию<br/>{task.name}</div>
						<div className="upload-work-form-inner-container">
							<div className="upload-work-form">
								{
									uploadedImages.length > 0
										? <ImageCarouselWithUpload
											firstImage={uploadedImages[0]}
											onAddImage={onAddImage}/>
										: <label className="upload-files-instruction-banner">
											<input type="file"
												   accept="image/png, image/jpeg, image/gif"
												   className="add-image-button"
												   onChange={firstTimeUploadHandler}/>
											<img className="upload-instruction"
												 src={require("../img/upload-instruction.png")}/>
										</label>
								}
							</div>
							<textarea className="about-work-input" value={aboutWork} onChange={changeAboutWorkHandler}
									  placeholder={"Напишите о своей работе..."}/>
						</div>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	)

}
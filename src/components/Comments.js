import React, {useState} from "react";
import {CommentsData} from "../data/Comments";
import "./Comments.css"

export default function Comments({work}) {

	let comments = CommentsData.filter((comment) => comment.workId === work.workId)

	const [comment, setComment] = useState("")

	function changeCommentInputHandler(event) {
		setComment(event.target.value)
	}

	function sendCommentHandler(event) {
		event.preventDefault();
		if (comment === undefined || comment === "")
			return

		CommentsData.push({
			workId: work.workId,
			name: "Константин Иванов",
			avatarUrl: require("../img/avatar.png"),
			date: "Только что",
			text: `${comment}`
		})

		localStorage.setItem("Comments", JSON.stringify(CommentsData))

		setComment("")
	}

	return (
		<div className="comments-main-container">
			<div className="comments-input-container">
				<div className="comments-avatar-input">
					<img className="comments-avatar" src={require("../img/avatar.png")}/>
					<form className="comments-form" onSubmit={sendCommentHandler}>
						<textarea className="comments-input" value={comment} onChange={changeCommentInputHandler}
								  placeholder={"Оставьте комментарий"}/>
						<button className="leave-comment-button" disabled={comment === undefined || comment === ""}>
							Оставить комментарий
						</button>
					</form>
				</div>
				<div className="other-comments">
					{
						comments.map((comment) => {
							return (
								<div className="other-comment">
									<img className="other-comment-avatar" src={comment.avatarUrl}/>
									<div className="other-comment-info">
										<div className="other-comment-name-date">
											<div className="other-comment-name">
												{comment.name}
											</div>
											<div className="other-comment-date">
												{comment.date}
											</div>
										</div>
										<div className="other-comment-text">
											{comment.text}
										</div>
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
		</div>
	)
}
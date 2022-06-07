export var FinishedTasks = localStorage.getItem("FinishedTasks") === null
	? [{
		taskId: 0,
		firstPlace: 0,
		secondPlace: 1,
		thirdPlace: 2,
		whenFinished: "1 день назад"
	}]
	: JSON.parse(localStorage.getItem("FinishedTasks"))
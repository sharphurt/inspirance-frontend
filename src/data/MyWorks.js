export var MyWorks = localStorage.getItem("MyWorks") === null
	? []
	:
	JSON.parse(localStorage.getItem("MyWorks"))

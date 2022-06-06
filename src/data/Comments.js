export var CommentsData = localStorage.getItem("Comments") === null
	? [
		{
			workId: 2,
			name: "Анастасия Герасимова",
			avatarUrl: require("../img/avatars/anastasia-gerasimova-avatar.png"),
			date: "3 дня назад",
			text: "Хорошая работа!"
		},
		{
			workId: 2,
			name: "Евгений Коваленко",
			avatarUrl: require("../img/avatars/evgenii-kovalenko-avatar.png"),
			date: "30 минут назад",
			text: "Мне очень нравится"
		}
	]
	: JSON.parse(localStorage.getItem("Comments"))
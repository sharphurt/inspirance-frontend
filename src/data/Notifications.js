import {MyWorks} from "./MyWorks";

export const Notifications = [
	{
		notificationType: "like",
		who: "Антон Гришин",
		taskId: 0,
		imageUrl: require("../img/avatars/anton-avatar.png"),
		workId: MyWorks[6].workId,
		when: "17 минут назад"
	},
	{
		notificationType: "taskEnd",
		taskId: 0,
		imageUrl: require("../img/tasks/hat.png"),
		score: "7 из 11",
		when: "17 минут назад"
	},
	{
		notificationType: "like",
		who: "Анна Науме",
		taskId: 0,
		imageUrl: require("../img/avatars/naume.png"),
		workId: MyWorks[6].workId,
		when: "26 минут назад"
	},
	{
		notificationType: "like",
		who: "Дмитрий Нерпин",
		taskId: 0,
		imageUrl: require("../img/avatars/nerpin.png"),
		workId: MyWorks[6].workId,
		when: "31 минуту назад"
	},
	{
		notificationType: "like",
		who: "Полина Закирова",
		taskId: 0,
		imageUrl: require("../img/avatars/zakirova.png"),
		workId: MyWorks[6].workId,
		when: "49 минут назад"
	},
	{
		notificationType: "like",
		who: "Наталья Жернова",
		taskId: 0,
		imageUrl: require("../img/avatars/zherenova.png"),
		workId: MyWorks[6].workId,
		when: "1 час назад"
	},
	{
		notificationType: "like",
		who: "Роман Щелков",
		taskId: 0,
		imageUrl: require("../img/avatars/shelkov.png"),
		workId: MyWorks[6].workId,
		when: "3 часа назад"
	},
	{
		notificationType: "like",
		who: "Жанна Вострецова",
		taskId: 0,
		imageUrl: require("../img/avatars/vostretsiva.png"),
		workId: MyWorks[6].workId,
		when: "4 часв назад"
	},

]
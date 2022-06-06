export var WorkImages = localStorage.getItem("WorkImages") === null
	? [
		{
			workId: 2,
			images: [
				{
					// thumbnail: require("../../data/Works/Images/1/1.png"),
					original: require("../../data/Works/Images/1/1.png")
				},
				{
					// thumbnail: require("../../data/Works/Images/1/2.png"),
					original: require("../../data/Works/Images/1/2.png")
				},
				{
					// thumbnail: require("../../data/Works/Images/1/3.png"),
					original: require("../../data/Works/Images/1/3.png")
				}
			]
		},
		// {
		// 	workId: 10000,
		// 	images: [
		// 		{
		// 			// thumbnail: require("../../data/Works/Images/2/1.png"),
		// 			original: require("../../data/Works/Images/2/1.png")
		// 		},
		// 		{
		// 			// thumbnail: require("../../data/Works/Images/2/2.png"),
		// 			original: require("../../data/Works/Images/2/2.png")
		// 		},
		// 		{
		// 			// thumbnail: require("../../data/Works/Images/2/3.png"),
		// 			original: require("../../data/Works/Images/2/3.png")
		// 		},
		// 		{
		// 			// thumbnail: require("../../data/Works/Images/2/4.png"),
		// 			original: require("../../data/Works/Images/2/4.png")
		// 		},
		// 	]
		// }
	]
	: JSON.parse(localStorage.getItem("WorkImages"))
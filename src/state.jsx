const user = {
	name: "Иван",
	lastname: "Иванов",
	email: "ivanov@mail.ru",
	id: "1",
	about: "Здесь я рассказываю о себе...",
	avatar: "https://cdn2.iconfinder.com/data/icons/cartoon-avatars/128/Avatars_hipster-256.png",
};

const users = {
	0: {
		name: "Ипатий",
		lastname: "Смирнов",
		id: 4,
		email: "ipat@ou.ru",
		avatar:
			"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80",
	},
	1: {
		name: "Евсения",
		lastname: "Тетерина",
		id: 7,
		email: "evsteter@mail.ru",
		avatar:
			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80",
	},
	2: {
		name: "Владислав",
		lastname: "Яблочков",
		id: 2,
		email: "vlad@imail.me",
		avatar:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D&w=300&q=80",
	},
	3: {
		name: "Кузьмина",
		lastname: "Петрова",
		id: 11,
		email: "kuzma@mail.io",
		avatar:
			"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D&w=300&q=80",
	},
	4: {
		name: "Ирина",
		lastname: "Свиридова",
		id: 5,
		email: "irina@mail.ru",
		avatar:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D&w=300&q=80",
	},
};

export function getUser(userId) {
	for (let i = 0; i < Object.keys(users).length; i++) {
		if (users[i].id == userId) return users[i];
	}
	return user;
}

export function getUsers() {
	return users;
}
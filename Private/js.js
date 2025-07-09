import { CREDENTIALS, BIG_DATA } from './data.js';

const createData = () => {
	let table = document.querySelector(".table");
	for (let i = 0; i < BIG_DATA.length; i++) {
		let data = BIG_DATA[i];
		let container = document.createElement("div");
		container.classList.add("private-container");
		let hTitle = document.createElement("h3");
		hTitle.classList.add("private-title");
		hTitle.textContent = data.title;
		container.appendChild(hTitle);
		for (let i = 0; i < 3; i++) {
			if (
				(data.user && i == 0) ||
				(data.password && i == 1) ||
				(data.new && i == 2)
			) {
				let divCard = document.createElement("div");
				divCard.classList.add("private-card");
				let value = data.user;
				let pContent = document.createElement("p");
				if (data.password && i == 1) {
					value = data.password;
				} else if (data.new && i == 2) {
					value = data.new;
				}
				pContent.innerHTML = value;
				let button = document.createElement("button");
				button.textContent = "Copy";
				button.addEventListener("click", () => {
					navigator.clipboard.writeText(
						data.click ? data.click : value
					);
				});
				divCard.appendChild(pContent);
				divCard.appendChild(button);
				container.appendChild(divCard);
			}
		}
		table.appendChild(container);
	}
};

let sign = false;

const validateForm = (user,pass) => {
	console.log(CREDENTIALS.user,user)
	console.log(CREDENTIALS.pass,pass)
	if (CREDENTIALS.user == user && CREDENTIALS.pass == pass) {
		localStorage.setItem("login", "login");
		createData();
		return true;
	}
	return false;
}

if (localStorage.getItem("login") === null) {
	localStorage.setItem("login", "sign");
}
if (localStorage.getItem("login") == "sign") {
	let bg = document.createElement("div");
	let form = document.createElement("div");
	let userContainer = document.createElement("div");
	let close = document.createElement("button");
	close.textContent = "X";
	close.addEventListener("click", () => {
		window.navigation.navigate("../");
	});
	let userLabel = document.createElement("label");
	userLabel.textContent = "User";
	let userInput = document.createElement("input");
	let passContainer = document.createElement("div");
	let message = document.createElement("span");
	let passLabel = document.createElement("label");
	passLabel.textContent = "Password";
	let passInput = document.createElement("input");
	let send = document.createElement("button");
	send.textContent = "Loggearse";
	send.addEventListener("click", () => {
		console.log("Click")
		sign = validateForm(userInput.value, passInput.value);
		console.log(sign, userInput.value, passInput.value)
		if (sign) {
			document.body.removeChild(bg);
			localStorage.setItem("login", "login");
			createData();
		} else {
			message.textContent = "¡Datos inválidos!";
		}
	});
	userContainer.appendChild(userLabel);
	userContainer.appendChild(userInput);
	form.appendChild(close);
	passContainer.appendChild(passLabel);
	passContainer.appendChild(passInput);
	passContainer.appendChild(message);
	form.appendChild(userContainer);
	form.appendChild(passContainer);
	form.appendChild(send);
	bg.appendChild(form);
	document.body.appendChild(bg);
}
if (localStorage.getItem("login") == "login" || sign == true) {
	sign = true;
	createData();
}

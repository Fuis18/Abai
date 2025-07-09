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

createData();

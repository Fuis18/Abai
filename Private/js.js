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

const validateCredentials = (user, pass) => {
    return CREDENTIALS.user === user && CREDENTIALS.password === pass;
};

const renderLoginForm = () => {
    console.log("a")
    const bg = document.createElement("div");
    bg.classList.add("login-overlay");
    const form = document.createElement("div");
    form.classList.add("login-form");

    const closeButton = document.createElement("button");
    closeButton.textContent = "X";
    closeButton.classList.add("close-button");
    closeButton.addEventListener("click", () => {
        window.location.href = "../";
    });

    const createInputContainer = (labelText, inputType = "text") => {
        console.log("a")
        const container = document.createElement("div");
        container.classList.add("input-group");

        const label = document.createElement("label");
        label.textContent = labelText;

        const input = document.createElement("input");
        input.type = inputType;

        container.appendChild(label);
        container.appendChild(input);
        return { container, input };
    };

    const { container: userContainer, input: userInput } = createInputContainer("Usuario");
    const { container: passContainer, input: passInput } = createInputContainer("Contraseña", "password");

    const messageElement = document.createElement("span");

    const sendButton = document.createElement("button");
    sendButton.textContent = "Ingresar";
    sendButton.classList.add("submit-button");

    sendButton.addEventListener("click", () => {
	console.log("a")
        if (validateCredentials(userInput.value, passInput.value)) {
            localStorage.setItem("login", "loggedIn");
            bg.remove();
            renderDataCards();
        } else {
            messageElement.textContent = "¡Credenciales inválidas! Intenta de nuevo.";
            messageElement.style.color = "red";
        }
    });

    form.appendChild(closeButton);
    form.appendChild(userContainer);
    form.appendChild(passContainer);
    form.appendChild(sendButton);
    form.appendChild(messageElement);
    bg.appendChild(form);
    document.body.appendChild(bg);

    userInput.focus();
};

const loginStatus = localStorage.getItem("login");

if (!loginStatus || loginStatus === "signedOut") {
    console.log("a")
    localStorage.setItem("login", "signedOut");
    renderLoginForm();
} else if (loginStatus === "loggedIn") {
    console.log("b")
    renderDataCards();
}

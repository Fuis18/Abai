"use strict";

const BIG_DATA = [
	{
		title: "visor/simple/citrix",
		user: "lromanci",
		password: "A39#@A5%foQ@#qH18#@A5%fooD53",
		new: "T39#msD3ooQ@#zT3#msD%fooD79a32",
	},
	{
		title: "NOTAS",
		user: "ANI:&nbsp;<br/>NAC:&nbsp;<br/>--------------------",
		click: `Cliente no reconoce el consumo total de sus datos
Cliente compró un paquete de 3GB de Internet 30 días x S/10 a través de Sat Push.
ABORDAJE ENCUESTA CROSS
No tenga cuidado
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:  
--------------------
ANI:  
NAC:   `,
	},
	{
		title: "Web Mail",
		user: "luis.roman.pe@abaigroup.info",
		password: "Ingreso.2024",
	},
	{
		title: "MTA - NL",
		user: "74021636",
		password: "Abai0000",
	},
	{
		title: "SRM - N",
		user: "LROMANCIEZ",
		password: "791825",
	},
	{
		title: "BUK",
		user: "romanciezaluisangel@gmail.com",
		password: "Luis018Rmn",
	},
	{
		title: "smartlearning.abaigroup.com/moodle/",
		user: "luis.roman.pe",
		password: "Abai2024$",
	},
	{
		title: "Walkie Talkie",
		user: "luis.roman_pe",
		password: "Luis018Rmn",
	},
];

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

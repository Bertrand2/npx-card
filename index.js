#!/usr/bin/env node
"use strict";

const chalk = require("chalk");

const shrek = [
	"⢀⡴⠑⡄⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ",
	"⠸⡇⠀⠿⡀⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ",
	"⠀⠀⠀⠀⠑⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀ ",
	"⠀⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆⠀⠀⠀⠀⠀⠀⠀ ",
	"⠀⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢀⢴⣶⣆ ",
	"⠀⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠁⠸⣼⡿ ",
	"⠀⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉⠀⠀⠀⠀⠀ ",
	"⠀⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ ",
	"⠀⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ ",
	"⠀⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ ",
	"⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀ ",
	"⠀⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀ ",
	"⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀ ",
	"⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀ ",
	"⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠛⠉                "
];
// .join("|\n");

const defaultValues = {
	"name": "Sylber",
	"github": "Bertrand2",
	"linkedin": "bertrand-dossogne/",
	"npm":"~sylber",
	"card": "@sylber/card"
};
const intro = {
	"github": "GitHub : ",
	"linkedin": "LinkedIn : ",
	"npm": "npm : ",
	"card": "Card : "
}
const prefixes = {
	"github": "https://github.com/",
	"linkedin": "https://linkedin.com/in/",
	"npm": "https://npmjs.com/",
	"card": "npx "
};
const values = defaultValues;

const cardWidth = 70;
const leftWidth = 20;
const rightWidth = cardWidth - leftWidth;

const createCard = (card) => {
	card.push( chalk.black("╔" + "═".repeat(cardWidth) + "╗") );
	card.push( 
		chalk.black("║") + 
		" ".repeat( Math.floor((cardWidth-values.name.length)/2) ) + 
		chalk.bold.dim.rgb(20,100,20)(values.name) + 
		" ".repeat( Math.ceil((cardWidth-values.name.length)/2) ) + 
		chalk.black("║") 
	);
	card.push( chalk.black("╟" + "─".repeat(cardWidth) + "╢") );
	card.push( chalk.black("║" + " ".repeat(cardWidth) + "║") );
	card.push( 
		chalk.black("║") + 
		" ".repeat( leftWidth-intro.github.length ) + 
		chalk.bold.black(intro.github) + 
		chalk.gray(prefixes.github) + 
		chalk.rgb(100,20,20)(values.github) + 
		" ".repeat( rightWidth - prefixes.github.length - values.github.length ) + 
		chalk.black("║") 
	);
	card.push( 
		chalk.black("║") + 
		" ".repeat( leftWidth-intro.linkedin.length ) + 
		chalk.bold.black(intro.linkedin) + 
		chalk.gray(prefixes.linkedin) + 
		chalk.rgb(20,20,100)(values.linkedin) + 
		" ".repeat( rightWidth - prefixes.linkedin.length - values.linkedin.length ) + 
		chalk.black("║") 
	);
	card.push( 
		chalk.black("║") + 
		" ".repeat( leftWidth-intro.npm.length ) + 
		chalk.bold.black(intro.npm) + 
		chalk.gray(prefixes.npm) + 
		chalk.rgb(100,20,100)(values.npm) + 
		" ".repeat( rightWidth - prefixes.npm.length - values.npm.length ) + 
		chalk.black("║") 
	);
	card.push( 
		chalk.black("║") + 
		" ".repeat( leftWidth-intro.card.length ) + 
		chalk.bold.black(intro.card) + 
		chalk.gray(prefixes.card) + 
		chalk.rgb(20,100,20)(values.card) + 
		" ".repeat( rightWidth - prefixes.card.length - values.card.length ) + 
		chalk.black("║") 
	);
	card.push( chalk.black("║" + " ".repeat(cardWidth) + "║") );
	card.push( chalk.black("╚" + "═".repeat(cardWidth) + "╝") );
	return card;
}
const createFullCard = (image) => {
	const card = createCard(["",""]);
	const fullCard = image.map( (line, i) => `${chalk.green(line)} ${card[i] ? chalk.bgWhite(card[i]) : ""}`);

	return fullCard;
}

console.log(createFullCard(shrek).join("\n"));
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMD = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?',
    'What is the description of your project?',
    'Do you want to include a Table of Contents in your README?',
    'How can we install your project?',
    'Describe how to use your project.',
    'Do you have any credits you would like to add to the readme?',
    'What license does this project use?',
    'How can users contribute to this project?',
    'How can we test your project?',
    'What is your GitHub username?',
    'What is your best contact email?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('success'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: "input",
                message: questions[0],
                name: "title",
            },
            {
                type: "input",
                message: questions[1],
                name: "desc",
            },
            {
                type: 'confirm',
                message: questions[2],
                name: 'toc',
            },
            {
                type: "input",
                message: questions[3],
                name: "installs"
            },
            {
                type: "input",
                message: questions[4],
                name: "usage",
            },
            {
                type: "input",
                message: questions[5],
                name: "credits",
            },
            {
                type: "list",
                message: questions[6],
                name: "license",
                choices: ["Apache License 2.0","GNU General Public License v3.0","MIT License","BSD 2-Clause 'Simplified' License","BSD 3-Clause 'New' or 'Revised' License","Boost Software License 1.0","Creative Commons Zero v1.0 Universal","Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"],
            },
            {
                type: "input",
                message: questions[7],
                name: "contribute",
            },
            {
                type: "input",
                message: questions[8],
                name: "testing",
            },
            {
                type: "input",
                message: questions[9],
                name: "user",
            },
            {
                type: "input",
                message: questions[10],
                name: "email",
            },
        ])
        .then((response) =>
           writeToFile('exampleREADME.md', genMD.generateMarkdown(response)),
        
        );
};

// Function call to initialize app
init();
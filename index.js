// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?',
    'What is the description of your project?',
    'Describe how to use your project.',
    'What is the walkthrough URL?',
    'Do you have any credits you would like to add to the readme?',
    'What license does this project use?'
];
const answers = [];



// making a function to put the user answers in a string temp literal MD file
const generateMD = function (projectTitle, description, usage, walkthroughURL, credits, license) {
    const mdString = `# ${projectTitle}

## Description

${description}

## Usage

${usage}

[Walkthrough of the app!](${walkthroughURL})

## Credits

${credits}

## License

This project uses the ${license} license, and is available to read in this repository.`

    return mdString;
}

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
                type: "input",
                message: questions[2],
                name: "usage",
            },
            {
                type: "input",
                message: questions[3],
                name: "url",
            },
            {
                type: "input",
                message: questions[4],
                name: "credits",
            },
            {
                type: "input",
                message: questions[5],
                name: "license",
            }
        ])
        .then((response) =>
            writeToFile('testMD', generateMD(response.title, response.desc, response.usage, response.url, response.credits, response.license)),
        );
};

// Function call to initialize app
init();

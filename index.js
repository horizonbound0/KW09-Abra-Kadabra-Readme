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

// making an object to stuff the users answers into for passing into the functions from generateMarkdown.js
let userAnswers = {};

// making a function to put the user answers in a string temp literal MD file
const generateMD = function (projectTitle, description, toc, install, usage, credits, license, contrib, test, contactUN, contactEM) {
    const mdString = `# ${projectTitle}

## Description

${description}

${toc ? `## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
` : '---'}
## Installation

${install}

## Usage

${usage}

## Credits

${credits}

## Contributing

${contrib}

## Tests

${test}

## Questions

If you have any questions about my project I am ${contactUN} on GitHub, and my email address is ${contactEM}`

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
                type: "input",
                message: questions[6],
                name: "license",
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
            }
        ])
        .then((response) =>
            userAnswers.title = response.title,
            userAnswers.desc = response.desc,
            userAnswers.toc = response.toc,
            userAnswers.installs = response.installs,
            userAnswers.usage = response.usage,
            userAnswers.credits = response.credits,
            userAnswers.license = response.license,
            userAnswers.contribute = response.contribute,
            userAnswers.testing = response.testing,
            userAnswers.user = response.user,
            userAnswers.email = response.email,

            writeToFile('testMD.md', generateMD(response.title, response.desc, response.toc, response.installs, response.usage, response.credits, response.license)),
        );
};

// Function call to initialize app
init();

console.log(JSON.stringify(userAnswers));
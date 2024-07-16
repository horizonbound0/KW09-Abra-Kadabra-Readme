// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badgeURL = `https://img.shields.io/badge/License-${license}-blue`
  return badgeURL;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  if (license) {
    licenseLink = `[License](#license)`;
    return licenseLink;
  } else {
    return licenseLink;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  `
## License

This project uses the ${license} license, and is available to read in this repository.
`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

## Description

${data.desc}

${data.toc ? `## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- ${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
` : '---'}
## Installation

${data.installs}

## Usage

${data.usage}

## Credits

${data.credits}
${renderLicenseSection(data.license)}
## Contributing

${data.contribute}

## Tests

${data.testing}

## Questions

If you have any questions about my project I am ${data.user} on GitHub, and my email address is ${data.email}`;
}

module.exports = {generateMarkdown};

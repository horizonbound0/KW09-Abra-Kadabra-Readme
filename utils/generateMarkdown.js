// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badgeURL = `![License badge image](https://img.shields.io/badge/License-${license}-blue)`;
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
  return `
## License

This project uses the ${license} license, and is available to read in this repository.
`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  // grab license badge and license MD link
  const licenseLink = renderLicenseLink(data.license);
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title} ${licenseBadge}

## Description

${data.desc}

${data.toc ? `## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- ${licenseLink}
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

${licenseSection}

## Contributing

${data.contribute}

## Tests

${data.testing}

## Questions

If you have any questions about my project I am ${data.user} on GitHub, and my email address is ${data.email}`;
}

module.exports = {generateMarkdown};

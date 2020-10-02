// Global varibles
const inquirer = require("inquirer");
const fs = require("fs");

// Inquirer prompt diaglog options
inquirer
    .prompt([
        {
            type: "input",
            message: "What is your Github user name? ",
            name: "readmeUsername"
        },
        {
            type: "input",
            message: "What is your email address? ",
            name: "readmeEmail"
        },
        {
            type: "input",
            message: "What is your projects name? ",
            name: "readmeName"
        },
        {
            type: "input",
            message: "Please write a short description of your project. ",
            name: "readmeDescription"
        },
        {
            type: "input",
            message: "What kind of license should your project have? ",
            name: "readmeLicense"
        },
        {
            type: "input",
            message: "What command should be run to install dependencies? ",
            name: "readmeDependencies"
        },
        {
            type: "input",
            message: "What command should be run to run tests? ",
            name: "readmeTests"
        },
        {
            type: "input",
            message: "What does the user need to know about using the repo? ",
            name: "readmeUsing"
        },
        {
            type: "input",
            message: "What does the user need to know about contributing the repo? ",
            name: "readmeContributing"
        },

    ]).then(function (response) {
        console.log("GENERATING README...");
        // Variable to always make the License user prompt uppercase 
        var readmeLicenseUpperCase = response.readmeLicense.toUpperCase();
        // Variable to create the README information
        const fileTest = `

# ${response.readmeName}

![License: ${readmeLicenseUpperCase}](https://img.shields.io/badge/License-${readmeLicenseUpperCase}-blue.svg)

(https://opensource.org/licenses/${readmeLicenseUpperCase})

## Description
${response.readmeDescription}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)
         
 * [License](#license)
        
* [Contributing](#contributing)
         
 * [Tests](#tests) 
         
* [Questions](#questions) 

## Installation

To install necessary dependencies, run the following command:

> ${response.readmeDependencies}

## Usage

${response.readmeUsing}

## License

This project is under the ${readmeLicenseUpperCase} license.

## Contributing
        
> ${response.readmeContributing}

## Tests

To run test's, run the following command:

${response.readmeTests}

## Questions
        
If you have any questions about the repo, open an issue or contact me directly at ${response.readmeEmail}. You can find more
of my work at [${response.readmeUsername}](https://github.com/${response.readmeUsername}).
        
`
        fs.writeFile("README.md", fileTest, function (err) {
            if (err) {
                return console.log(err);
            }
        });
    });

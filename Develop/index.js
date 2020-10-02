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
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
//const questions = [];
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'ProjectName',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'ProjectDescription',
            message: 'Please provide a description of your project',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation requirments, if any',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples of use, if any',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List collaborators, if any',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license is your project using?',
            choices: [
                'None',
                'Apache License 2.0',
                'GNU General Public License V3.0',
                'MIT License',
                'BSD 2-Clause "Simplified" License',
                'BDS 3-Clause "New" or "Revised" License',
                'Boost Software License 1.0',
                'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License 1.0',
                'GNU Affero General Public License v3.0',
                'GNU General Public License v2.0',
                'GNU Lesser General Public License v2.1',
                'Mozilla Public License 2.0',
                'The Unlicense'
            ]
        },
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }
questions()


// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
//const questions = [];
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'user',
            message: 'Please enter your full name',
        },
        {
            type: 'input',
            name: 'git',
            message: 'Please enter your GitHub username',
        },
        {
            type: 'input',
            name: 'mail',
            message: 'Please enter your email',
        },
        {
            type: 'input',
            name: 'git',
            message: 'Please enter your GitHub username',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'projectDescription',
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
                'GNU Lesser General Public License v3.0',
                'Mozilla Public License 2.0',
                'The Unlicense'
            ],
        },
        {
            type: 'input',
            name: 'features',
            message: 'List your projects features',
        },
        {
            type: 'input',
            name: 'screenshot',
            message: 'Please enter path to screenshot, if any',
        },
        {
            type: 'input',
            name: 'depoly',
            message: 'Please enter link to deployed site, if any',
        },
    ])
.then(input => {
    return input;
})
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) throw err;
        console.log('README has been created!')

    })
}

// TODO: Create a function to initialize app
function init() {
    questions() // Prompt user to get input data
        .then(input => {
            return generateMarkdown(input);
        })
        .then(markdown => {
            writeToFile('test.md', markdown);
        })
        .catch(err => {
            console.log(err);
        })
}

// Function call to initialize app
init()

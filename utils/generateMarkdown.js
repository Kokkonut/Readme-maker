// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'none') {
    return ''
  } else if (license === 'Apache License 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'GNU General Public License V3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'BSD 2-Clause "Simplified" License') {
    return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
  } else if (license === 'BDS 3-Clause "New" or "Revised" License') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  } else if (license ===  'Boost Software License 1.0') {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  } else if (license === 'Creative Commons Zero v1.0 Universal') {
    return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'
  } else if (license ===  'Eclipse Public License 1.0') {
    return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  } else if (license === 'GNU Affero General Public License v3.0') {
    return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
  } else if (license === 'GNU General Public License v2.0') {
    return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  } else if (license ===    'GNU Lesser General Public License v3.0') {
    return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
  } else if (license ===  'Mozilla Public License 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else {
    return ''
  }
  }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license === 'MIT License') {
    return `
    ### MIT License
    
    > Copyright (c) [2022] [${data.user}]
    > 
    > __Permission is hereby granted, free of charge, to any person obtaining a copy__
    > __of this software and associated documentation files (the "Software"), to deal__
    > __in the Software without restriction, including without limitation the rights__
    > __to use, copy, modify, merge, publish, distribute, sublicense, and/or sell__
    > __copies of the Software, and to permit persons to whom the Software is__
    > __furnished to do so, subject to the following conditions:__
    > 
    > The above copyright notice and this permission notice shall be included in all
    > copies or substantial portions of the Software.
    > 
    > THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    > IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    > FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    > AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    > LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    > OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    > SOFTWARE.
    `
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license !== 'none') {
    return `
  ## License
  
  ${renderLicenseLink(data)}
    `
  } else {
    return `
  ## License
  There has not been any license set for this project. 
    `
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `
# ${data.title} ${renderLicenseBadge(data.license)}

## Description
${data.projectDescription}

## Installation
${data.installation}

## Usage Instructions
${data.usage}

## Credits
${data.credits}

## Screenshot
![SS](${data.screenshot})

## Issues
${data.issues}

## Link to deployed Site
[${data.title}](${data.depoly})

## Contact
${data.mail}

[Github](https://github.com/${data.git})

## My Git

[![Kokkonut's github stats](https://github-readme-stats.vercel.app/api?username=${data.git}&theme=blue-green)](https://github.com/${data.git}/github-readme-stats)

[![Kokkonut's top languages](https://github-readme-stats.vercel.app/api/top-langs/?username=${data.git}&theme=blue-green)](https://github.com/${data.git}/github-readme-stats)




${renderLicenseSection(data)}
`;
};

module.exports = { generateMarkdown };

const fs = require('fs');
const inquirer = require('inquirer');

// Function to generate the README content
function generateREADME(answers) {
  // Return a formatted string with the README content
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For additional questions, contact me:
- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: ${answers.email}
  `;
}

// Prompt the user for information
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the project title:'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a brief description of your project:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage information:'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache', 'GPL', 'None']
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Provide contribution guidelines:'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide test instructions:'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:'
    }
  ])
  .then(answers => {
    const readmeContent = generateREADME(answers);

    // Write the generated README content to a file
    fs.writeFile('README.md', readmeContent, err => {
      if (err) {
        console.error(err);
      } else {
        console.log('README.md generated successfully!');
      }
    });
  });

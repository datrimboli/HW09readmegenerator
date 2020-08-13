// Bringing in inquirer
const inquirer = require('inquirer')
// Bringing in fs
const fs = require('fs')

// Establishing question function
const question = () => {
  // Navagating to inquirer prompt
  inquirer
    .prompt([
      // Populating title question in terminal
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
      },
      // Populating description question in terminal
      {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project?'
      },
      // Populating installation question in terminal
      {
        type: 'input',
        name: 'installation',
        message: 'Please enter the installation instructions for your project.'
      },
      // Populating usage question in terminal
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide the usage information of your project.'
      },
      // Populating contribution question in terminal
      {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines to your project?'
      },
      // Populating test question in terminal 
      {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions of your project?'
      },
      // Populating Github question in terminal
      {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
      },
      // Populating Email question in terminal
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      },
      // Populating license question in terminal
      {
        type: 'list',
        name: 'choice',
        message: 'Which type of license does your application use?',
        choices: ['MIT', 'APACHE2.0', 'GPL3.0', 'BSD3', 'None']
      }
    ])
    // Opening .then function
    .then(res => {
      // Console logging responses to prompted questions in terminal
      console.log(res.title)
      console.log(res.description)
      console.log(res.installation)
      console.log(res.usage)
      console.log(res.contribution)
      console.log(res.test)
      console.log(res.github)
      console.log(res.email)
      console.log(res.choice)

      // Creating variable "output" which will contain all text populated into my README
      // Sections & Template literals to populate entered information into the corresponding and correct sections
      var output = `
     
# Title: ${res.title}     
 ![badge](https://img.shields.io/badge/license-${res.choice}-blue.svg)                             
-------

## Table of Contents 


- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Description: 
${res.description}




## Installation: 
${res.installation}




## Usage:
 ${res.usage}




## Contributing: 
${res.contribution}




## Tests: 
${res.test}




## License: 
${res.choice}




## Questions:

Project Headquarters:
12345 Oak Tree St.
San Diego, CA 91910

Phone:(619) 555-5555
Fax:(619) 555-5556

Github Username: [${res.github}](https://github.com/${res.github}) 

Contact me via email at: ${res.email} `

      // Write file, creates the "newreadme.md, puts the text in var output into the read me file"
      fs.writeFile('newreadme.md', output, (err) => {
        // If there is an error, console log err
        if (err) { console.log(err) }
        // Console logging "File Created!" when a new README file is generated
        console.log('File Created!')
      })
    })
    .catch(err => console.log(err))
}
// Calling question function
question()

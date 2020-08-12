const inquirer = require('inquirer')

const fs = require('fs')


const question = () => {
  inquirer
    .prompt([
      // {
      //   type: 'input',
      //   name: 'name',
      //   message: 'What is your name?'
      // },
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project?'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please enter the installation instructions for your project.'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide the usage information of your project.'
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines to your project?'
      },
      {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions of your project?'
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      },
      {
        type: 'list',
        name: 'choice',
        message: 'Which type of license does your application use?',
        choices: ['MIT', 'APACHE2.0', 'GPL3.0', 'BSD3', 'None']
      }
    ])
    .then(res => {
      console.log(res.title)
      console.log(res.description)
      console.log(res.installation)
      console.log(res.usage)
      console.log(res.contribution)
      console.log(res.choice)
      console.log(res.github)
      console.log(res.email)


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

Github Username: [${res.github}](https://github.com/${res.github}) 

Contact me via email at: ${res.email}
 







          
          `
      fs.writeFile('newreadme.md', output, (err) => {
        if (err) { console.log(err) }
        console.log('File Created!')
      })
    })
    .catch(err => console.log(err))
}

question()
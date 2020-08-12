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
        type: 'list',
        name: 'choice',
        message: 'Which type of license does your application use?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
      }
    ])
    .then(res => {
      console.log(res.title)
      console.log(res.description)
      console.log(res.installation)
      console.log(res.usage)
      console.log(res.contribution)
      console.log(res.choice)
      console.log(res.title)
      console.log(res.title)


      var output = `
#Title: ${res.title}                                   https://img.shields.io/badge/license-${res.choice}-blue.svg
-------

Description: 
------------
${res.description}

Installation: 
-------------
${res.installation}

Usage:
------
${res.usage}

Contributing:
-------------
${res.contribution}

Tests:
------
${res.test}

License:
--------
${res.choice}

Table of Contents:
------------------

Questions:
----------


#Choice: ${res.choice}
          
          `
      fs.writeFile('newreadme.md', output, (err) => {
        if (err) { console.log(err) }
        console.log('File Created!')
      })
    })
    .catch(err => console.log(err))
}

question()
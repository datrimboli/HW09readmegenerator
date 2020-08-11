const inquirer = require('inquirer')

const fs = require('fs')

const question = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      },
      {
        type: 'list',
        name: 'choice',
        message: 'Pick a number',
        choices: ['one', 'two', 'three', 'four']
      }
    ])
    .then(res => {
      console.log(res.name, res.choice)

    })
    .catch(err => console.log(err))
}

question()
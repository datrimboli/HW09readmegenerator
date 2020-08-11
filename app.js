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
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
      },
      {
        type: 'list',
        name: 'choice',
        message: 'Pick a number',
        choices: ['one', 'two', 'three', 'four']
      }
    ])
    .then(res => {
      console.log(res.name, res.title, res.choice)

      var output = `


#Name: ${res.name}

#Title: ${res.title}

          
          `
      fs.writeFile('newreadme.md', output, (err) => {
        if (err) { console.log(err) }
        console.log('File Created!')
      })
    })
    .catch(err => console.log(err))
}

question()
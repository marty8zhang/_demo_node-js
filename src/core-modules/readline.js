const {rl, askQuestions} = require('./custom-modules/readline')
const questions = [
  'Name: ',
  'Age: ',
  'Gender: ',
]

function displayAnswers(answers) {
  const [name, age, gender] = answers

  rl.write(
    `Thanks ${name}, we now know that you're a ${age} year old ${gender}.\nBye bye!\n\n`,
  )

  process.exit()
}

rl.write('\nHi, please provide the following information about yourself.\n')
askQuestions(questions, displayAnswers)

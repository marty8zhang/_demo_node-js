const {rl, askQuestions} = require('./custom-modules/readline-and-events')
const questions = [
  'Name: ',
  'Age: ',
  'Gender: ',
]

// noinspection JSUnusedLocalSymbols
function displayAnswersAndExit(answers) {
  const [name, age, gender] = answers

  rl.write(
    `Thanks ${name}, we now know that you're a ${age} year old ${gender}.\nBye bye!\n\n`,
  )

  process.exit()
}

function displayAnswers(answers) {
  const [name, age, gender] = answers

  rl.write(
    `Thanks ${name}, we now know that you're a ${age} year old ${gender}.\nBye bye!\n\n`,
  )
}

rl.write('\nHi, please provide the following information about yourself.\n')
// Usage Example 1: Provide a callback.
// askQuestions(questions, displayAnswersAndExit)

// Usage Example 2: Handle the event without a callback.
const event = askQuestions(questions)

event.on('allQuestionsAnswered', displayAnswers)
event.on('allQuestionsAnswered', () => process.exit())

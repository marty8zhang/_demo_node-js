const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const questions = [
  'Name: ',
  'Age: ',
  'Gender: ',
]
const answers = []

function displayAnswers(answers) {
  const [name, age, gender] = answers

  rl.write(
    `Thanks ${name}, we now know that you're a ${age} year old ${gender}.\nBye bye!\n\n`,
  )
}

function questionAnswered(answer) {
  if (answer.trim().length === 0) {
    rl.write('Please provide a valid answer.\n')
    rl.question(questions[answers.length], questionAnswered)

    return;
  }

  answers.push(answer.trim())

  if (answers.length < questions.length) {
    rl.question(questions[answers.length], questionAnswered)
  } else {
    displayAnswers(answers)

    process.exit()
  }
}

function askQuestions(questions) {
  const [firstQuestion] = questions

  rl.question(firstQuestion, questionAnswered)
}

rl.write('\nHi, please provide the following information about yourself.\n')
askQuestions(questions)

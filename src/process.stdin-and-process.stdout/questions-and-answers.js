const questions = [
  'Name: ',
  'Age: ',
  'Gender: ',
]

function askQuestion(i) {
  process.stdout.write(questions[i])
}

const answers = []

process.stdin.on('data', (data) => {
  const answer = data.toString().trim()
  if (answer.length === 0) {
    process.stdout.write('Please provide a valid answer.\n')
    askQuestion(answers.length)

    return;
  }

  answers.push(answer)

  if (answers.length < questions.length) {
    askQuestion(answers.length)
  } else {
    process.exit()
  }
})

process.on('exit', () => {
  const [name, age, gender] = answers

  process.stdout.write(
    `Thanks ${name}, we now know that you're a ${age} year old ${gender}.\nBye bye!\n\n`,
  )
})

process.stdout.write('\nHi, please provide the following information about yourself.\n')
askQuestion(0)

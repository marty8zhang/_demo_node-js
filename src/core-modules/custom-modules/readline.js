const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

/*
 * Note: `done()` has a default implementation here which does nothing. If the user doesn't
 * provide a custom `done()` function which contains `process.exit()`, then this function will be
 * halt forever after all questions have been asked.
 */
function askQuestions(questions, done = a => a) {
  const [firstQuestion] = questions
  const answers = []

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
      done(answers)
    }
  }

  rl.question(firstQuestion, questionAnswered)
}

module.exports = {
  rl,
  askQuestions,
}

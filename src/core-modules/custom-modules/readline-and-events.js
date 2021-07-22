const {EventEmitter} = require('events')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

/*
 * Note: `done()` has a default implementation here which does nothing. The function user should
 * call `process.exit()` in either a provided custom `done()` function or a `allQuestionsAnswered`
 * event handler; otherwise, this function will be halt forever after all questions have been asked.
 */
function askQuestions(questions, done = a => a) {
  const [firstQuestion] = questions
  const answers = []
  const eventEmitter = new EventEmitter()

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
      eventEmitter.emit('allQuestionsAnswered', answers)

      done(answers)
    }
  }

  rl.question(firstQuestion, questionAnswered)

  return eventEmitter
}

module.exports = {
  rl,
  askQuestions,
}

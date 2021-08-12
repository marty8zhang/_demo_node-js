const childProcess = require('child_process')

// `childProcess.exec()` runs a synchronous child process.
childProcess.exec(
  'dir',
  (err, data, stderr) => {
    console.log('Result from `dir`:')

    if (err) {
      // `err` provides the Node.js error. `stderr` provides the error from the console output.
      console.log(stderr)
    }

    console.log(data)
  },
)

childProcess.exec(
  'ls',
  (err, data, stderr) => {
    console.log('\nResult from `ls`:')

    if (err) {
      // `err` provides the Node.js error. `stderr` provides the error from the console output.
      console.log(stderr)
    }

    console.log(data)
  },
)

// A Node.js process runs another Node.js process.
childProcess.exec(
  'node ..\\asynchronous-tasks-and-callbacks.js',
  (err, data, stderr) => {
    console.log('\nResult from `node ...`:')

    if (err) {
      // `err` provides the Node.js error. `stderr` provides the error from the console output.
      console.log(stderr)
    }

    console.log(data)
  },
)

const childProcess = require('child_process')

// `childProcess.spawn()` runs a asynchronous child process.
const spawnedChildProcessPing = childProcess.spawn('ping', ['www.google.com'])
spawnedChildProcessPing.stdout.on('data', (data) => {
  console.log('Result from `ping`:')
  console.log(data.toString())
})
spawnedChildProcessPing.on('close', () => {
  console.log('`ping` finished.')
})

const spawnedChildProcessError = childProcess.spawn('not-existing-command', [])
spawnedChildProcessError.on('error', (err) => {
  console.log('Error from `no-existing-command`:')
  console.log(err.toString())
})

const msToStop = 5000
const msInterval = msToStop / 50

let msFromStart = 0
const intervalId = setInterval(() => {
  msFromStart += msInterval

  process.stdout.clearLine()
  process.stdout.cursorTo(0)
  process.stdout.write(`Waiting... ${Math.floor(msFromStart / msToStop * 100)}%`)
}, msInterval)

setTimeout(() => {
  clearInterval(intervalId)

  process.stdout.clearLine()
  process.stdout.cursorTo(0)
  process.stdout.write('Done\n\n')
}, msToStop)

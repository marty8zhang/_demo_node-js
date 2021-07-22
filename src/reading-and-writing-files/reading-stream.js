const fs = require('fs')
const path = require('path')
const readStream = fs.createReadStream(
  path.join(__dirname, './dummy-data/lorum-ipsum.md'),
  {
    encoding: 'UTF-8',
    highWaterMark: 1024, // Step size.
  },
)

let totalLength = 0;

/*
 * Read the first block of stream.
 * Note that there is no cursor (or won't affect the cursor if there is one) and hence it won't
 * affect the following handlers to read from the beginning of the file.
 */
readStream.once('data', (data) => {
  console.log(data)
})
// This will read from the the beginning of the file again if executed.
// readStream.once('data', (data) => {
//   console.log(data)
// })

readStream.on('data', (data) => {
  totalLength += data.length
  console.log(`Read ${data.length} characters.`)
})

readStream.on('end', () => {
  console.log(`Finished reading. Read ${totalLength} characters in total.`)
})

const fs = require('fs')
const path = require('path')
const readStream = fs.createReadStream(
  path.join(__dirname, './dummy-data/lorum-ipsum.md'),
  {
    encoding: 'UTF-8',
    highWaterMark: 1024, // Step size.
  },
)
// Note that the file doesn't need to be pre-existing for write stream.
// However, any content in an existing file will be overridden by a new process.
const newFile = path.join(__dirname, './dummy-data/new-stream-file.md')
const writeStream = fs.createWriteStream(newFile, {encoding: 'UTF-8'})

/*
 * Write Stream Method 1: Using `pipe()`.
 * The below one-liner will directly write all read content into the write stream file.
*/
// readStream.pipe(writeStream)

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
  // Write Stream Method 2: Read and write.
  writeStream.write(data)

  console.log(`Read ${data.length} characters and wrote to \`${newFile}\`.`)

  totalLength += data.length
})

function pipeProcessStdIn() {
  console.log('Please use `Ctrl + C` to terminate the running script after trying this demo.')
  console.log(`Type anything below and check \`${newFile}\``)

  // Write Stream Method 3: Write other stream into a file.
  process.stdin.pipe(writeStream)
}

readStream.on('end', () => {
  console.log(`Finished reading. Read and wrote ${totalLength} characters in total.`)

  pipeProcessStdIn()
})

const path = require('path')
const fs = require('fs')

const newDirectory = path.join(__dirname, 'new-directory')

if (fs.existsSync(newDirectory)) {
  console.log(`Directory \`${newDirectory}\` already exists.`)

  process.exit()
}

fs.mkdir(newDirectory, (err) => {
  if (err) {
    throw err
  }

  console.log(`Directory \`${newDirectory}\` created.`)
})

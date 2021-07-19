const fs = require('fs')

function test(err, data) {
  console.log('Data:', data)
}

fs.readdir('/', test)

fs.readFile('file.txt', )

console.log('EOF')

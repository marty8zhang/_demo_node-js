const fs = require('fs')

function test(err, data) {
  console.log('Data:', data)
}

fs.readdir('.', test)

fs.readFile(__filename, 'utf-8', test)

// Note how the `EOF` appears before the results of `fs.readdir()` and `fs.readFile`.
console.log('EOF')

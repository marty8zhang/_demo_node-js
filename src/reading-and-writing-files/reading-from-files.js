const fs = require('fs')
const path = require('path')

// Method 1: Read and parse a JSON file directly via `require()`.
const data = require('./data_r.json')
console.log('Name from `require()`:', data.name)

// Method 2.
fs.readFile(path.join(__dirname, 'data_r.json'), 'utf-8', (err, data) => {
  console.log('Name from `fs.readFile()` data: ', data?.name)
  console.log('Name from `fs.readFile()` parsed data: ', JSON.parse(data).name)
})

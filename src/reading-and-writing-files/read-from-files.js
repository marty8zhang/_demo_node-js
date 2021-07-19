const fs = require('fs')
const path = require('path')
const data = require('./data_r.json')

console.log('Name from `require()`:', data.name)

fs.readFile(path.resolve(__dirname, './data_r.json'), 'utf-8', (err, data) => {
  console.log('Name from `fs.readFile()` data: ', data?.name)
  console.log('Name from `fs.readFile()` parsed data: ', JSON.parse(data).name)
})

const fs = require('fs')

var file = fs.readFileSync('./lib.js', { encoding: 'utf-8' })

console.log(file)

fs.writeFileSync('./lib.js', 'const test = "fileIsModified"')

file = fs.readFileSync('./lib.js', { encoding: 'utf-8' })
console.log(file)

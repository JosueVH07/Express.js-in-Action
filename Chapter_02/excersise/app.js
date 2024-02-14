const url = require('url')
console.log('hello world')

const parsedURL = url.parse('http://www.example.com/profile?name=barry')

console.log(parsedURL.protocol)
console.log(parsedURL.host)
console.log(parsedURL.query)

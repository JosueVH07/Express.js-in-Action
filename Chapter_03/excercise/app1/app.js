const express = require('express');
const http = require('http');
const logger = require('morgan');
const path = require('path');

const app = express();

//**MY OWN MIDDLEWARE */
// app.use((req, res, next) => {
//     console.log('In comes a request to: ' + req.url);
//     next
// })
// app.use((req, res, next) => {
//     const minute = (new Date()).getMinutes();
//     if ((minute % 2) === 0) {
//         next
//     } else {
//         res.statusCode = 403
//         res.end('Not authorized.')
//     }
//     // res.writeHead(200, { 'Content-Type': 'text/plain' })
//     // res.end('Hello, world!');
// })

// app.use((req, res) => {
//     res.end('Secret info: the password is "swordfish"!');
// })

//**MORGAN  */
const publicPath = path.resolve(__dirname, 'public')
app.use(express.static(publicPath))
app.use(logger('short'))

app.use((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Hello, world!, Looks like you are lost.');
})

http.createServer(app).listen(3000)

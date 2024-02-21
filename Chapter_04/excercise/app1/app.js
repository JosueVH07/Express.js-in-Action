var express =  require('express');
var path = require('path');
var fs = require('fs');
var logger = require('morgan');

var app = express();
var staticPath = path.join(__dirname, 'static');


// app.use('/', (req, res, next) => {
//     console.log('Request IP: ' + req.url);
//     console.log('Request date: ' + new Date());
//     next();
// })

app.use(logger('short'));
app.use(express.static(staticPath));
// app.use('/', (req, res, next) => {
//     const filePath = path.join(__dirname, 'static', req.url);
//     fs.stat(filePath, (err, file) => {
//         if (err) {
//             console.log(err)
//             next();
//             return;
//         }
//         if (file.isFile()) {
//             res.sendFile(filePath);
//         } else {
//              next();
//         }
//     })
// })

app.use((err,req, res, next) => {
    res.status(500);
    res.send('Internal server error');
})
app.use((err, res, req, next) => {
    console.error(err);
    next(err);
})

app.use((req, res) =>{
    res.status(404);
    res.send('File not found!');
})

app.listen(3000, () => {
    console.log('App started on port 3000');
})
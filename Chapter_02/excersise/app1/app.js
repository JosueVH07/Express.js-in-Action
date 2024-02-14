const Mustache = require('mustache')
const resulr = Mustache.render('Hola, {{first}} {{last}}!' ,{
    first: 'Nicolas',
    last: 'Cage'
})

console.log(resulr)
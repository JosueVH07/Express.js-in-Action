const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World, from Express. GET');
})

app.post('/', (req, res) => {
    res.send('Hello World, from Express. POST');
})

app.put('/', (req, res) => {
    res.send('Hello World, from Express. PUT');
})

app.delete('/', (req, res) => {
    res.send('Hello World, from Express. DELETE');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});
const express = require('express');

const app = express();

app.get('/olivia', (req, res) => {
    res.send('Olivia');
})

app.use((req, res) => {
    res.status(404).send('Page not found')
})

app.listen(3001, () => {
    console.log('Server is running on port 3001')
})
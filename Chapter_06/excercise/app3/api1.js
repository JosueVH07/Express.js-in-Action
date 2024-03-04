const express = require('express');

const api = express();

api.get('/timezone', (req, res) => {
    res.send('Timezone');
})

api.get('all_timezones', (req, res) => {
    res.send('All timezones');
})


module.exports = api;
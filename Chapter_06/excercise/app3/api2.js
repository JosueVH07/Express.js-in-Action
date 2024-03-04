const express = require('express');

const api = express();

api.get('/timezone', (req, res) => {
    res.send('Timezone from api2.js');
})

api.get('all_timezones', (req, res) => {
    res.send('All timezones from api2.js');
})


module.exports = api;
const express = require('express');
const app = express();


app.use('/random/:min/:max', (req, res) => {
    const min = parseInt(req.params.min);
    const max = parseInt(req.params.max);
    if (isNaN(min) || isNaN(max)) {
        res.status(400);
        res.json({ error: 'Bad request.' });
        return;
    }
    const result = Math.random() * (max - min) + min;
    res.json({ result: result.toFixed(2) });
})




app.listen(3000, () => {
    console.log('Server is running on port 3000')
});
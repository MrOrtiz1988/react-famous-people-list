const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const peopleRouter = require('./routes/people.router.js');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/people', peopleRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});
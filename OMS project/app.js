const express = require('express');

const orgRouter = require('./orgRoute');

const empRouter = require('./empRoute');

const app = express();




// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));


// 3) ROUTES
app.use('/org',orgRouter );
app.use('/emp',empRouter );

module.exports = app;









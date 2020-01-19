const express = require('express');
const AppError = require('./appError');
const orgRouter = require('./orgRoute');
const globalErrorHandler = require('./errorController');
const empRouter = require('./empRoute');
const authRouter = require('./authRoute');

const app = express();



 
// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

app.use((req, res, next) => {

   req.requestTime = new Date().toISOString();
next();
});


// 3) ROUTES
app.use('/api/user', authRouter);
app.use('/api/org',orgRouter );
app.use('/api/emp',empRouter );

app.all('*', (req, res, next) => {
// const err = new Error(`cant find ${req.originalUrl} on this server`);
// err.status = 'fail';
// err.statusCode = 404;
next( new AppError(`cant find ${req.originalUrl} on this server`, 400));
});

app.use(globalErrorHandler);

module.exports = app;









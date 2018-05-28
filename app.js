var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Router imports
var accountRouter = require('./routes/account');
var authenticationRouter = require('./routes/authentication');
var eventRouter = require('./routes/event');
var organizationRouter = require('./routes/organization');
var productRouter = require('./routes/product');
var registrationRouter = require('./routes/registration');

var app = express();

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/accounts', accountRouter);
app.use('/authentication', authenticationRouter);
app.use('/events', eventRouter);
app.use('/organization', organizationRouter);
app.use('/products', productRouter);
app.use('/registrations', registrationRouter);

module.exports = app;

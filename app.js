'use strict';
var assert = require('better-assert');
var _ = require('lodash');

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

module.exports = function app(config) {
  assert(_.isObject(config));
  assert(_.isString(config.statwarn.alerting.api.endpoint));

  var routes = require('./routes/index')(config.statwarn.alerting.api.endpoint);

  var app = express();

  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(express.static(path.join(__dirname, 'public')));

  app.use('/', routes);

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handlers

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: {}
    });
  });

  return app;
};

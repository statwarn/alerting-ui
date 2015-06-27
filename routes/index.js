'use strict';

var express = require('express');
var router = express.Router();

module.exports = function (STATWARN_ALERTING_API_ENDPOINT) {

  /* GET home page. */
  return router.get('*', function (req, res, next) {
    res.render('index', {
      alert_endpoint: STATWARN_ALERTING_API_ENDPOINT
    });
  });

};

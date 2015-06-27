'use strict';

angular
  .module('StatWarn')
  .config(function ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /alerts
    $urlRouterProvider.otherwise("/alerts");


    // Now set up the states
    $stateProvider
      .state('alerts', {
        url: "/alerts?site",
        views: {
          list: {
            templateUrl: "app/alerts/alerts-list.html"
          }
        }
      })
      .state('alerts.create', {
        url: "/create",
        views: {
          'create@': {
            templateUrl: "app/alerts/edit/alert-edit.html"
          }
        }
      });
  });

'use strict';

/**
 * boostraper
 */
angular.module('alerts', ['restangular']);

angular.module('alerts').config(['RestangularProvider', function (RestangularProvider) {
  RestangularProvider.setBaseUrl('https://iadvize-alerting.bringr.net/v1');
  RestangularProvider.setRestangularFields({
    id: 'alert_id'
  });
}]);

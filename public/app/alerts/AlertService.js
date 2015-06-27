'use strict';

var measurement_ids = {
  'default': 'bringr-strategy-es-took',
  'positiv': 'idz-contacts',
  'targeting': 'idz-rule-display'
};

angular
  .module('alerts')
  .factory('AlertService', ['Restangular', '$stateParams', function (Restangular, $stateParams) {
    var alerts = Restangular.all('alerts');
    // alerts.remove = function (alerts, alert) {
    //   alert.id = alert.alert_id;
    //   var index = alerts.indexOf(alert);
    //   if (index > -1) alerts.splice(index, 1);
    // };

    alerts.save = function (alert) {
      return Restangular.all('alerts').customPUT(alert, alert.id);
    };

    alerts.getMeasurementId = function (site) {
      return measurement_ids[site];
    };
    return alerts;
  }]);

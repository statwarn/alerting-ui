'use strict';
angular
  .module('alerts')
  .controller('AlertsCtrl', function ($rootScope, $stateParams, AlertService, toaster) {

    var site = $stateParams.site || 'default';

    this.alerts = AlertService.getList({
      measurement_id: AlertService.getMeasurementId(site)
    }).$object;
    // this.edit = function () {};

    this.delete = function (alert) {
      if (!confirm('Are you sure?')) {
        return;
      }

      alert.remove().then(function success() {
        toaster.pop('success', 'Removed');
        this.alerts = _.without(this.alerts, alert);
      }.bind(this), function error(err) {
        toaster.pop('error', 'Could not remove the alert');
      });
    };

    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
      console.error({
        event: event,
        toState: toState,
        error: error
      });
      alert(error);
    });

    $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
      alert('state not found' + unfoundState);
      console.error({
        event: event,
        unfoundState: unfoundState,
        fromState: fromState,
        fromParams: fromParams
      });
    })
  });

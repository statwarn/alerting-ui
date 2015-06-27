'use strict';
angular
  .module('alerts')
  .directive('alertTriggerRule', function () {
    return {
      require: '^alertTriggerRules',
      restrict: 'E',
      scope: {
        trigger: '=',

        targets: '=',
        operators: '=',

        enabled: '=',

        add: '&onAdd',
        remove: '&onRemove'
      },

      templateUrl: 'app/alerts/edit/trigger-rule.html'
    };
  });

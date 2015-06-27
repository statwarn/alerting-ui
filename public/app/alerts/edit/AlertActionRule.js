'use strict';
angular
  .module('alerts')
  .directive('alertActionRule', function () {
    return {
      require: '^alertActionRules',
      restrict: 'E',
      scope: {
        action: '=',
        availableActions: '=',

        enabled: '=',

        add: '&onAdd',
        remove: '&onRemove'
      },

      templateUrl: 'app/alerts/edit/action-rule.html'
    };
  });

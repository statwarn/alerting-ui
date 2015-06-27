'use strict';

angular
  .module('alerts')
  .directive('alertTriggerRules', function () {

    return {
      restrict: 'E',

      scope: {
        targets: '=targets',
        triggers: '='
      },

      controller: function ($scope) {

        $scope.add = function () {
          $scope.triggers.push({});
          updateCanRemove();
        };

        $scope.canRemove = false;

        function updateCanRemove() {
          $scope.canRemove = $scope.triggers.length > 1;
        }

        $scope.remove = function (trigger) {
          _.remove($scope.triggers, trigger);
          updateCanRemove();
        };
      },

      templateUrl: 'app/alerts/edit/trigger-rules.html'
    };
  });

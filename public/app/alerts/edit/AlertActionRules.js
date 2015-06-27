'use strict';

angular
  .module('alerts')
  .directive('alertActionRules', function () {

    return {
      restrict: 'E',

      scope: {
        availableActions: '=',
        actions: '='
      },

      controller: function ($scope) {

        $scope.add = function () {
          $scope.actions.push({});
          updateCanRemove();
        };

        $scope.canRemove = false;

        function updateCanRemove() {
          $scope.canRemove = $scope.actions.length > 1;
        }

        $scope.remove = function (trigger) {
          _.remove($scope.actions, trigger);
          updateCanRemove();
        };
      },

      templateUrl: 'app/alerts/edit/action-rules.html'
    };
  });

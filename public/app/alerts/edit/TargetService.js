'use strict';
angular
  .module('alerts')
  .factory('TargetService', function (Restangular) {
        return Restangular.all('targets');
  });

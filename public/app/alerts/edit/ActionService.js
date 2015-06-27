'use strict';
angular
  .module('alerts')
  .factory('ActionService', function (Restangular) {
    return Restangular.all('actions');
  });

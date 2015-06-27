'use strict';
angular
  .module('alerts')
  .controller('AlertEditCtrl', function ($stateParams, $state, AlertService, TargetService, ActionService) {
    this.alert = {
      name: '',
      triggers: [{}],
      actions: [{}]
    };

    var site = $stateParams.site || 'default';

    this.actions = ActionService.getList().$object;
    this.targets = TargetService.getList({
      measurement_id: AlertService.getMeasurementId(site)
    }).$object;

    this.add = function () {
      this.alert.triggers.push({});
    };

    this.remove = function (trigger) {
      _.remove(this.alert.triggers, trigger);
    };

    this.save = function () {
      var _alert = _.cloneDeep(this.alert);
      _alert.id = _alert.id || createGuid();
      _alert.measurement_id = AlertService.getMeasurementId(site);

      _alert.triggers.forEach(function (trigger) {
        trigger.target = trigger.target.target;
        trigger.operator = {
          name: trigger.operator.operator_id,
          value: parseInt(trigger.value, 10) ? parseInt(trigger.value, 10) : trigger.value
        };
      });

      _alert.activated = true;
      // send an JSON object instead of a string
      _alert.actions.forEach(function (action) {
        try {
          action.webhook = JSON5.parse(action.webhook); // try { } catch () {}
        } catch (e) {
          alert('Invalid JSON');
        }
      });
      console.log(_alert);
      AlertService.save(_alert).then(function (err, resp) {
        $state.go('^', {},  {reload: true});
      });
    };

    function createGuid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
  });

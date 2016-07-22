(function (lib, module) {
  'use strict';

  module.directive ('allexAngularValidate', ['$parse', function ($parse) {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, el, attrs, ctrl) {
        if (scope._ctrl.validate) {
          ctrl.$validators.allexAngularValidate = scope._ctrl.validate.bind(scope._ctrl, el.attr('name'));
        }else{
          console.error('Controller has no validate function');
        }
      }
    };
  }]);
})(ALLEX.lib, angular.module ('allex__web_angularcomponent'));

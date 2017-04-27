(function (lib, module) {
  'use strict';

  function onEvent (el, submitselector, evnt) {
    if (evnt.which !== 13) return;
    evnt.preventDefault();
    $(submitselector).click();
  }

  module.directive ('allexOnEnterSubmit', [function () {
    return {
      restrict : 'A',
      link : function (scope, el, attrs) {
        el.keypress(onEvent.bind(null, el, attrs.allexOnEnterSubmit));
      }
    };
  }]);
})(ALLEX.lib, angular.module ('allex__web_angularcomponent'));
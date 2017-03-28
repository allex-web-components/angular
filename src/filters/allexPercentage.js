(function (lib, module) {
  'use strict';
  module.filter('allexPercentage', ['$filter', function ($filter) {
    return function (input, decimals) {
      return $filter('number')(input * 100, decimals) + '%';
    };
  }]);
})(ALLEX.lib, angular.module('allex__web_angularcomponent'));

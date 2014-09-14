/**
 * @descAlert
 * @file alert.directive.js
 * @example <div alert type="{{alert.type}}" close="closeAlert($index)"><span ng-bind-html="alert.msg"></span></div>
 */
(function () {
    angular
        .module('template/alert/alert.html')
        .run(gnapAlertTemplate);

    gnapAlertTemplate.$inject = ['$templateCache'];

    function gnapAlertTemplate($templateCache) {

        $templateCache.put("template/alert/alert.html",
            "<div class=\"alert\" ng-class=\"{'alert-{{type || 'warning'}}': true, 'alert-dismissable': closeable}\" role=\"alert\">\n" +
            "    <button ng-show=\"closeable\" type=\"button\" class=\"close\" ng-click=\"close()\">\n" +
            "        <i class=\"icon-remove\"></i>\n" +
            "        <span class=\"sr-only\">Close</span>\n" +
            "    </button>\n" +
            "    <div ng-transclude></div>\n" +
            "</div>\n" +
            "");
    };
})();
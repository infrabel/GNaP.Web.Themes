/**
 * @desc masked input 
 * @file masked-input.directive.js
 * @example <input type="text" gnap-masked-input="a*-999-a999" />
 */
(function() {
    angular
        .module('gnap')
        .directive('gnapMaskedInput', gnapMaskedInput);

    function gnapMaskedInput() {

        function link(scope, element, attrs) {
            element.mask(attrs['gnapMaskedInput']);
        };

        return {
            restrict: 'A',
            link: link
        };
    }
})();
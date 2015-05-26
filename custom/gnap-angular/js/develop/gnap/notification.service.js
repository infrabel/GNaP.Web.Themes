/**
 * @desc displays a notification
 * @file notification.service.js
 */
(function () {
    'use strict';

    angular
        .module('gnap')
        .factory('notification', notification);

    function notification() {

        return {
            show: show,
            removeAll: removeAll
        };

        function show(options) {
            /* jshint camelcase:false */
            $.gritter.add({
                title: options.title,
                text: options.text,
                class_name: 'gritter-' + (options.type || 'default'),
                sticky: options.sticky || false
            });
        }

        function removeAll() {
            $.gritter.removeAll();
        }
    }
})();

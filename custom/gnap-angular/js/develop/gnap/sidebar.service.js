/**
 * @desc service for interacting with the sidebar
 * @file sidebar.service.js
 */
(function () {
    angular
        .module('gnap')
        .factory('sidebarService', ['localStorageService', sidebarService]);

    function sidebarService(localStorageService) {
        var settings = {
            items: [],
            shortcuts: [],
            visible: false,
            collapsed: localStorageService.get('sidebar-collapsed') === 'true'
        };

        function toggleMenu() {
            settings.visible = !settings.visible;
        };

        function toggleCollapsed() {
            settings.collapsed = !settings.collapsed;
            localStorageService.set('sidebar-collapsed', settings.collapsed);
        };

        function toggleSubmenu(parent) {
            var currentOpenState = parent.open;

            if (isFirstLevel(parent)) {
                collapseFirstLevelSubmenus();
            }

            parent.open = !currentOpenState;
        };

        function isFirstLevel(item) {

            for (var itemIndex = 0; itemIndex < settings.items.length; itemIndex++) {
                current = settings.items[itemIndex];
                if (current.key == item.key) {
                    return true;
                }
            }

            return false;
        };

        function collapseFirstLevelSubmenus() {
            for (var itemIndex = 0; itemIndex < settings.items.length; itemIndex++) {
                item = settings.items[itemIndex];

                item.open = false;
            }
        };

        function setActive(path) {
            // parse the path into an array
            var parsedPath = (path instanceof Array) ? path : path.split('/');

            // find the item to set as active
            updateActiveState(settings.items, parsedPath);

            function updateActiveState(itemList, pathSegments) {

                for (var itemIndex = 0; itemIndex < itemList.length; itemIndex++) {

                    var item = itemList[itemIndex];

                    item.active = false;
                    item.open = false;

                    if (item.key == pathSegments[0]) {

                        if (pathSegments.length == 1) {
                            // last item in the path segments
                            item.active = true;
                        } else if (item.items) {
                            item.open = true;
                        }
                    }

                    if (item.items) {
                        // item has subitems
                        updateActiveState(item.items, pathSegments.splice(1));
                    }
                }
            }
        };

        return {
            settings: settings,
            setActive: setActive,
            toggleMenu: toggleMenu,
            toggleCollapsed: toggleCollapsed,
            toggleSubmenu: toggleSubmenu
        };
    };
})();
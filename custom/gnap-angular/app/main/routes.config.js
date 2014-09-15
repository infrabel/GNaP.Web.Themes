(function () {
    angular
        .module('gnap-example-app')
        .config(stateConfig);

    var stateSettings = {
        name: 'main',
        state: {
            abstract: true,
            templateUrl: 'app/main/main.html',
            controller: 'MainController'
        },
        breadcrumb: {
            title: 'Home',
            url: '/'
        }
    };

    stateSettings.state.onEnter = onEnter;
    stateSettings.state.onExit = onExit;

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state(stateSettings.name, stateSettings.state);
    };

    onEnter.$inject = ['breadcrumbsService'];

    function onEnter(breadcrumbsService) {
        breadcrumbsService.addBreadcrumb(stateSettings.breadcrumb);
    };

    onExit.$inject = ['breadcrumbsService'];

    function onExit(breadcrumbsService) {
        breadcrumbsService.removeLastBreadcrumb();
    };
})();

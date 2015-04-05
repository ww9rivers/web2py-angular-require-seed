require.config({
    paths: {
	angular: 'static/js/angular/angular',
	angularRoute: 'static/js/angular-route/angular-route',
	app: 'static/js/app',
        text: 'static/js/requirejs-text/text',
        components: 'static/js/components',
        view1: 'static/js/view1',
        view2: 'static/js/view2'
    },
    shim: { 
        'angular' : {'exports' : 'angular'}
    },
    priority: [
        "angular"
    ],
    deps: window.__karma__ ? allTestFiles : [],
    callback: window.__karma__ ? window.__karma__.start : null,
    baseUrl: window.__karma__ ? '/base/app' : '',
});

require([
    'angular',
    'app'
], function(angular, app) {
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function() {
        // bootstrap the app manually
        angular.bootstrap(document, ['myApp']);
    });
}
       );

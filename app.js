var app = angular
  .module('app', [ 'ngRoute', 'ui.bootstrap', 'home'])
	.config(
        function($routeProvider, $httpProvider, $locationProvider) {
			$routeProvider.when('/', {
				templateUrl : 'js/home/home.html',
				controller : 'homeCtrl'
			}).otherwise('/');

			$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
            $locationProvider.html5Mode(true);
		});
		

